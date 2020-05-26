import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #101010;
`;

const HeaderLink = styled(NavLink)`
  padding: 2px 0;
  height: 24px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export {
  Container,
  HeaderLink,
};