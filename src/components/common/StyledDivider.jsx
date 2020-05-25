import React from "react";
import Divider from '@material-ui/core/Divider';
import styled from "styled-components";

const StyledDivider = props => (
  <StyledMUIDivider 
  />
);

export default StyledDivider

const StyledMUIDivider = styled(Divider)`
  background-color: ${p => p.theme.palette.defaultColor };
  color:  ${p => p.theme.palette.defaultColor };
`; 