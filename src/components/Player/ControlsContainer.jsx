import React from "react";
import {
  PauseIcon,
  SkipNextIcon,
  SkipPreviousIcon,
  PlayIcon,
  EqualizerIcon,
} from "src/icons";
import { formatTime } from "src/utils";

import {
  Controls,
  Buttons,
  IconWrapper,
  PlayPauseIconWrapper,
  TrackContainer,
  TimeValue,
  Track,
  TrackValue,
} from "./styled";

const ControlsContainer = ({
  duration,
  isPlaying,
  currentTime,
  playSong,
  pauseSong,
  handleNextSong,
  handlePreviousSong,
  handleTimeChange,
  setFlag,
}) => (
  <Controls>
    <Buttons>
      <IconWrapper onClick={() => { isPlaying && setFlag(true); }} >
        <EqualizerIcon />
      </IconWrapper>
      <IconWrapper onClick={handlePreviousSong} >
        <SkipPreviousIcon />
      </IconWrapper>
      {
        isPlaying ?
          <PlayPauseIconWrapper onClick={pauseSong}>
            <PauseIcon />
          </PlayPauseIconWrapper> :
          <PlayPauseIconWrapper onClick={playSong}>
            <PlayIcon />
          </PlayPauseIconWrapper>
      }
      <IconWrapper onClick={handleNextSong}>
        <SkipNextIcon />
      </IconWrapper>
    </Buttons>
    
    <TrackContainer>
      <TimeValue>
        {formatTime(currentTime) || "00:00"}
      </TimeValue>
      <Track
        onClick={handleTimeChange}
      >
        <TrackValue
          width={currentTime / duration * 100 + "%"}
        />
      </Track>
      <TimeValue>
        {formatTime(duration) || "00:00"}
      </TimeValue>
    </TrackContainer>
  </Controls>
);

export default ControlsContainer;