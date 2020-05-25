import styled from "styled-components";

// #region  Стили для index.js
const Container = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: #282828;
  overflow: hidden;
`;
//#endregion

// #region  Стили для SongInfo
const SongInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  padding-left: 12px;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  > img {
    height: 60px;
    width: 60px;
  }
`;

const AuthorNameWrapper = styled.div`
  padding-left: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Artist = styled.div`
  height: 20px;
  color: white;
  :hover {
    border-bottom: 1px solid white;
    cursor: pointer;
  }
`;

const Title = styled.div`
  height: 20px;
  :hover {
    border-bottom: 1px solid white;
    cursor: pointer;
  }
`;

const LikeWrapper = styled.div`
  padding-left: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    height: 24px;
    width: 24px;
    fill: ${p => p.theme.palette.defaultColor};
    :hover {
      fill: white;
      cursor: pointer;
    }
  }
`;
//#endregion

// #region Стили для ControlsContainer
const Controls = styled.div`
  margin-top: 6px;  
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`;
const Buttons = styled.div`
  width: 200px;
  height: 36px;
  display: grid;
  grid-template-columns: 12px 10px 36px 10px 12px;
  grid-column-gap: 16px;
  justify-content: center;
  align-items: center;
`;
const IconWrapper = styled.div`
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    height: 12px;
    width: 12px;
    fill: ${p => p.theme.palette.defaultColor};
  }
  :hover {
    svg {
      fill: white;
    }
  }
`;
const PlayPauseIconWrapper = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 32px;
    width: 32px;
    fill: ${p => p.theme.palette.defaultColor};
    :hover {
      height: 36px;
      width: 36px;
      fill: white;
    }
  }
`;
const TrackContainer = styled.div`
  display:  flex;
  align-items: center;
`;
const TimeValue = styled.div`
  padding: 6px;
  font-size: 12px;
  user-select: none;
`;
const Track = styled.div`
  width: 400px;
  height: 2px;
  border-radius: 1px;
  overflow: hidden;
  background-color: #696969;
  opacity: 0.1;

  :hover {
    height: 6px;
    background-color: white;
    border-radius: 3px;
  }
`;
const TrackValue = styled.div`
  height: 100%;
  width: ${p => p.width ? p.width : "0"};
  background-color: white;
`;
// #endregion

// #region Стили для VolumeContainer
const VolumeWrapper = styled.div`
  padding-right: 12px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items:  center;
`;

const VolumeIcon = styled.div`
  height: 16px;
  margin: 6px;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
    fill: ${p => p.theme.palette.defaultColor};
    :hover {
      fill: white;
    }
  }
`;

const VolumeRange = styled.input`
  margin-left: 2px;
  appearance: none;
  width: 80px;
  height: 2px; 
  border-radius: 1px;
  background-color: #919496;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #1DB954;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
  }
  :hover::-webkit-slider-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }
`;
// #endregion

// #region Стили для Equalizer
const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
// #endregion

export {
  SongInfoWrapper,
  ImgWrapper,
  AuthorNameWrapper,
  Artist,
  Title,
  LikeWrapper,

  StyledContainer,

  Container,
  Controls,
  Buttons,
  IconWrapper,
  PlayPauseIconWrapper,
  TrackContainer,
  TimeValue,
  Track,
  TrackValue,
  VolumeWrapper,
  VolumeIcon,
  VolumeRange,
};