import React from "react";
import { Fade, Backdrop } from "@material-ui/core";

import {
  StyledModal,
  StyledPaper,
} from "./styled"

const ModalContainer = ({
  children,
  open,
  setOpen,
}) => (
    <StyledModal
      open={open}
      onClose={() => { setOpen(false); }}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
    >
      <Fade
        in={open}
        timeout={1000}
      >
        <StyledPaper>
          {
            children
          }
        </StyledPaper>
      </Fade>
    </StyledModal>
  );

export default ModalContainer;