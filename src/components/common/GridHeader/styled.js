import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-height: 160px;
  min-height: 160px;
  background: ${p => `linear-gradient(180deg, ${p.theme.palette.gridsHeaderGradient[p.title]
   || "#b49bc8"}, #101010)`};
  opacity: 0.6;
`;

const Title = styled.div`
  position: absolute;
  left: 40px;
  bottom: 20px;
  color: white;
  font-size: 50px;
  font-weight: 500;
`;

export { Container, Title };