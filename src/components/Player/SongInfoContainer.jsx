import React from "react";  
import { FavoriteBorderIcon } from 'src/icons';

import {
  SongInfoWrapper,
  ImgWrapper,
  AuthorNameWrapper,
  Artist,
  Title,
  LikeWrapper,
} from "./styled";

const SongInfoContainer = ({ song = {} }) => {
  const { src, artist, title } = song;
  const defaultImg = "/img/defaultImg.jpg";

  return (
    <SongInfoWrapper>
      <ImgWrapper>
       <img 
        src={src || defaultImg}
        alt="Default song icon" 
      />
      </ImgWrapper>
      <AuthorNameWrapper>
        <Artist>{artist || "Неизвестный исполнитель"}</Artist>
        <Title>{title || "Неизвестная песня"}</Title>
      </AuthorNameWrapper>
      <LikeWrapper>
        <FavoriteBorderIcon />
      </LikeWrapper>
    </SongInfoWrapper>
  );
};

const MemoizedSongInfoContainer = React.memo(SongInfoContainer);

export default MemoizedSongInfoContainer;