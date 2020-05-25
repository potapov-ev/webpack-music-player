import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const GridWrapper = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Item = styled.div`
  padding: 12px;
  border-radius: 8px;
  background-color: #282828;
  cursor: pointer;
`;

const ImgWrapper = styled.img`
  width: 100%;
  :before {
    content: "";
    display: block;
    margin-top: 100%;
  }
`;

const SongInfo = styled.div`
  height: 60px;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  padding-top: 8px;
  font-size: 12px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const AuthorWrapper = styled(TitleWrapper)`
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemInfo = styled.div`
  padding: 10px 0;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: white;
`;

export {
  Container,
  GridWrapper,
  StyledLink,
  Item,
  ImgWrapper,
  SongInfo,
  AuthorWrapper,
  TitleWrapper,
  ItemInfo,
};