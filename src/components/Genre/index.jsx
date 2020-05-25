import React, { useState } from "react";
import { GridHeader, GridContainer } from "src/components/common";
import { genreSource } from "src/sources";
import { useFetch } from "src/hooks";

const Genre = ({ match }) => {
  const { id } = match.params;
  const { loading, data, error } = useFetch(genreSource.getGenre, { params: { id }});

  return (
    <>
      <GridHeader title={id} />
      <GridContainer
        data={data}
      />
    </>
  );
};

export default Genre;