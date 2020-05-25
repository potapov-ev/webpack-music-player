import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #101010;
`;

const HeaderLink = styled.div`
  padding: 2px 0;
  height: 24px;
  color: white;
  border-bottom: ${p => p.active && "2px solid #1DB954"};
  cursor: pointer;
`;

export {
  Container,
  HeaderLink,
};