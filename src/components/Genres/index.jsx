import React from "react";
import { GridContainer } from "src/components/common";
import { genresSource } from "src/sources";
import { useFetch } from "src/hooks";

const Genres = () => {
  const { loading, data, error } = useFetch(genresSource.getGenres, {});
  
  return (
    <GridContainer
      data={data}
      isGenres
    />
  );
};

export default Genres;