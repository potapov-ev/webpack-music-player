import React, { useState } from "react";
import { NAV_BAR_LINKS } from "src/constants";
import {
  SpotifyIcon,
  PersonIcon
} from "src/icons";
import {
  StyledDivider,
  ModalContainer,
} from "src/components/common";
import { AuthForm } from "src/components";

import {
  Container,
  Header,
  HeaderIconWrapper,
  LinkWrapper,
  LinkIconWrapper,
  LinkText,
  LogIn,
} from "./styled";

const SideBar = () => {
  const [activeId, setActiveId] = useState(0);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <Container>
      <div>
        <Header>
          <HeaderIconWrapper>
            <SpotifyIcon />
          </HeaderIconWrapper>
          Spotify
        </Header>
        {
          NAV_BAR_LINKS.map(({ Icon, text, id, href }) => (
            <LinkWrapper
              to={href}
              isActive={activeId === id}
              onClick={() => { setActiveId(id) }}
            >
              <LinkIconWrapper>
                <Icon />
              </LinkIconWrapper>
              <LinkText>{text}</LinkText>
            </LinkWrapper>
          ))
        }
      </div>

      <div>
        <StyledDivider />
        <LogIn
          onClick={() => { setIsAuthOpen(true); }}
        >
          <LinkIconWrapper>
            <PersonIcon />
          </LinkIconWrapper>
          Войти
        </LogIn>
        <ModalContainer
          open={isAuthOpen}
          setOpen={setIsAuthOpen}
        >
          <AuthForm />
        </ModalContainer>
      </div>
    </Container>
  );
};

export default SideBar;