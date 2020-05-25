import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback
} from "react";
import { AppContext } from "src/components";

import SongInfoContainer from "./SongInfoContainer";
import ControlsContainer from "./ControlsContainer";
import VolumeContainer from "./VolumeContainer"
import EqualizerContainer from "./Equalizer/EqualizerContainer";

import { Container } from "./styled";

const Player = () => {
  const { songs } = useContext(AppContext);
  const audio = useRef(null);
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const [volume, setVolume] = useState(100);
  const [flag, setFlag] = useState(false); // Для условия в эквалайзере
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = audio?.current?.duration;

  useEffect(() => {
    if (audio?.current) {
      document.addEventListener("keydown", handlekeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handlekeyDown);
    };
  }, [songs]);

  useEffect(() => {
    setCurrentSongIndex(0);
  }, [songs]);

  // #region Обработчики
  const playSong = () => {
    if (audio?.current) {
      audio.current.play();
    }
  };
  const pauseSong = () => {
    if (audio?.current) {
      audio.current.pause();
      setIsPlaying(false);
    }
  };
  const handlePlaying = () => {
    // Выполняется, когда начинается воспоизведение
    // В 1-й раз, после паузы..
    setIsPlaying(true);
  };
  const handleNextSong = () => {
    songs.length &&
      setCurrentSongIndex(currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1);
  };
  const handlePreviousSong = () => {
    songs.length &&
      setCurrentSongIndex(currentSongIndex ? currentSongIndex - 1 : songs.length - 1);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };
  const handleTimeChange = (event) => {
    if (audio?.current) {
      const currentX = event.pageX - event.target.offsetLeft; // Координата клика по оси Х дорожки
      const length = parseFloat(getComputedStyle(event.currentTarget).width); // Длина дорожки
      audio.current.currentTime = currentX / length * duration;
      setCurrentTime(audio.current.currentTime);
    }
  };
  const handleVolumeChange = useCallback((event) => {
    if (audio?.current) {
      if (event.target.value === "0") {
        setIsVolumeOn(false);
      } else {
        setIsVolumeOn(true);
      }
      audio.current.volume = event.target.value / 100;
      setVolume(event.target.value);
    }
  }, [audio]);
  const handleVolumeSwitch = useCallback(() => {
    if (audio?.current) {
      if (isVolumeOn) {
        audio.current.volume = 0;
      } else {
        audio.current.volume = volume / 100;
      }
      setIsVolumeOn(!isVolumeOn);
    };
  }, [audio, isVolumeOn]);
  const handlekeyDown = (e) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 32:
        audio.current.paused ? playSong() : pauseSong();
        break;
      case 39:
        audio.current.currentTime += 10;
        break;
      case 37:
        audio.current.currentTime -= 10;
        break;
      case 40:
        if (audio.current.volume >= 0.1) {
          setVolume((audio.current.volume -= 0.1) * 100);
        } else {
          setVolume((audio.current.volume = 0) * 100);
        }
        break;
      case 38:
        if (audio.current.volume <= 0.9) {
          setVolume((audio.current.volume += 0.1) * 100);
        } else {
          setVolume((audio.current.volume = 1) * 100);
        }
        break;
      default:
        return;
    }
  };
  // #endregion

  return (
    <>
      {
        !!songs.length &&
        <audio
          ref={audio}
          autoPlay
          preload="auto"
          src={songs[currentSongIndex].audioSrc}
          onPlaying={handlePlaying}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNextSong}
        /* loop - повтор */
        />
      }
      <Container>
        <SongInfoContainer
          song={songs[currentSongIndex]}
        />

        <ControlsContainer
          duration={duration}
          isPlaying={isPlaying}
          currentTime={currentTime}
          playSong={playSong}
          pauseSong={pauseSong}
          handleNextSong={handleNextSong}
          handlePreviousSong={handlePreviousSong}
          handleTimeChange={handleTimeChange}
          setFlag={setFlag}
        />

        <VolumeContainer
          volume={volume}
          isVolumeOn={isVolumeOn}
          handleVolumeChange={handleVolumeChange}
          handleVolumeSwitch={handleVolumeSwitch}
        />
      </Container>
    </>
  );
};

export default Player;

/* {
      <EqualizerContainer
        audio={songs[currentSongIndex]?.audioSrc}
        flag={flag}
        setFlag={setFlag}
      />
} */