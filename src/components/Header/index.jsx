import React, { useState } from "react";
import { HEADER_LINK } from "src/constants";
import {
  Container,
  HeaderLink,
} from "./styled";

const Header = () => {
  return (
    <Container>
      {
        HEADER_LINK.map(({ text, href, key }) => (
          <HeaderLink
            key={key}
            activeStyle={{ borderBottom: "2px solid #1DB954" }}
            exact
            to={href}
          >
            {text}
          </HeaderLink>
        ))
      }
    </Container>
  )
};

export default Header;