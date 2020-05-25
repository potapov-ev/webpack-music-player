import React from "react";
import SongCardWrapper from "./SongCardWrapper";

import {
  Container,
  GridWrapper,
  StyledLink,
  Item,
  ImgWrapper,
  SongInfo,
  AuthorWrapper,
  TitleWrapper,
  ItemInfo,
} from "./styled";

const GridContainer = ({ data, isGenres }) => {
  const ItemWrapper = isGenres ? StyledLink : SongCardWrapper;

  return (
    <Container>
      <GridWrapper>
        {
          !!data?.length &&
          data.map(({ genre, title, artist, src, id }) => (
            <Item key={id} >
                <ItemWrapper 
                  to={`/genres/${genre}`}
                  currentSongId={id}                  
                  songs={data}
                >
                  <ImgWrapper src={src} />
                  {
                    artist ?
                      <SongInfo>
                        <AuthorWrapper>
                          {artist}
                        </AuthorWrapper>
                        <TitleWrapper>
                          {title}
                        </TitleWrapper>
                      </SongInfo>
                      :
                      <ItemInfo>
                        {title}
                      </ItemInfo>
                  }
                </ItemWrapper>
            </Item>
          ))
        }
      </GridWrapper>
    </Container>
  )
};

export default GridContainer;