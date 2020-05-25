import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ContentContainer = styled.div`
  width: calc(100% - 230px);
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  background-color: #101010;

`;

export { Container, ContentContainer };
