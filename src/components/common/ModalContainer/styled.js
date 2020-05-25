import styled from "styled-components";
import { Modal, Paper } from "@material-ui/core";

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  outline: none;
`;

export {
  StyledModal,
  StyledPaper,
};