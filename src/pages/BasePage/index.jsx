import React from 'react';
import { SideBar, Header, Player, Genres, Genre } from "src/components";
import { Route } from 'react-router-dom';

import { Container, ContentContainer } from "./styled";

function BasePage() {
  return (
    <Container>
      <SideBar></SideBar>
      <ContentContainer>
        <Route exact path={["/", "/genres"]} render={() => (
          <>
            <Header />
            <Genres />
          </>
        )} />
        <Route exact path='/genres/:id' component={Genre} />
      </ContentContainer>
      <Player />
    </Container>
  );
}

export default BasePage;
