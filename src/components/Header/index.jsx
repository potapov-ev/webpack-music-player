import React, { useState } from "react";
import { HEADER_LINK } from "src/constants";
import {
  Container,
  HeaderLink,
} from "./styled";

const Header = () => {
  const [activeKey, setActiveKey] = useState(1);
  return (
    <Container>
      {
        HEADER_LINK.map(({ text, key }) => (
          <HeaderLink
            onClick={() => { setActiveKey(key); }}
            active={key === activeKey}
          >
            {text}
          </HeaderLink>
        ))
      }
    </Container>
  )
};

export default Header;