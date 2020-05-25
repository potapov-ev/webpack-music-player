import React from "react";
import {
  VolumeOnIcon,
  VolumeOffIcon,
} from "src/icons";

import {
  VolumeWrapper,
  VolumeIcon,
  VolumeRange,
} from "./styled";

const VolumeContainer = ({
  volume,
  isVolumeOn,
  handleVolumeChange,
  handleVolumeSwitch,
}) => (
  <VolumeWrapper>
    <VolumeIcon onClick={handleVolumeSwitch}>
      {
        isVolumeOn ?
          <VolumeOnIcon /> :
          <VolumeOffIcon />
      }
    </VolumeIcon>
    <VolumeRange
      type="range"
      max="100"
      value={volume}
      onChange={handleVolumeChange}
    />
  </VolumeWrapper>
);

const MemoizedVolumeContainer = React.memo(VolumeContainer);

export default MemoizedVolumeContainer;