import styled from "styled-components";
import { Field } from "react-final-form";
import { Button } from "@material-ui/core";

const Container = styled.div`
  padding: 40px;
  width: 400px;
  display: grid;
  grid-row-gap: 12px;
`;

const StyledField = styled(Field)`
  height: 60px;
`;

const StyledButton = styled(Button)`
  width: 60px;
`;

const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Container, StyledField, StyledButton, LastRow };