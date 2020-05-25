import React, { useState } from "react";
import Canvas from "./Equalizer";

import {
  StyledContainer,
} from "../styled";

const EqualizerContainer = ({ audio, flag, setFlag }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* {
        open &&
        <StyledContainer>
          {
            audio ?
              <Canvas
                audio={audio}
                flag={flag}
                setFlag={setFlag}
                setOpen={setOpen}
              />
              :
              <></>
          }
        </StyledContainer>
      } */}
    </>
  );
};

export default EqualizerContainer;