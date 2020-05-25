import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  padding-bottom: 0;
  height: calc(100vh - 80px);
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #030303;
  overflow: hidden;
`;

const Header = styled.h1`
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
`;

const HeaderIconWrapper = styled.div`
  margin-right: 12px;
  svg {
    height: 40px;
    width: 40px;
    fill: white;
  }
`;

const Row = styled(Link)`
  height: 36px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${p => p.theme.palette.defaultColor };
  :hover {
    cursor: pointer;
  }
`;

const LinkWrapper = styled(Row)`
  margin: 12px 0;
  background-color: ${p => p.isActive && "#282828"};
  color: ${p => p.isActive && "white"};
  border-radius: 4px;
  font-weight: bold;
  svg {
    fill: ${p => p.isActive && "white"} !important;
  }
  :hover {
    color: white;
    svg {
      fill: white;
    }
  }
`;

const LinkIconWrapper = styled.div`
  margin: 0 12px;
  height: 24px;
  svg {
    height: 24px;
    width: 24px;
    fill: #919496;
  }
`;

const LinkText = styled.div``;

const LogIn = styled(Row)`
  padding: 4px 0;
  height: 36px;
  color: white;
  svg {
    fill: white;
  }
`;

export {
  Container,
  Header,
  HeaderIconWrapper,
  LinkWrapper,
  LinkIconWrapper,
  LinkText,
  LogIn,
}