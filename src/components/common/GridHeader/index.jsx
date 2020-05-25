import React from "react";

import {
  Container,
  Title,
} from "./styled";

const GridHeader = ({ title }) => {

  return (
    <Container title={title} >
      {
        !!title?.length &&
          <Title>{title[0].toUpperCase() + title.slice(1)}</Title>
      }

    </Container>
  )
};

export default GridHeader;