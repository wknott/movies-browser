import React from "react";
import img from "./poster.jpg";
import star from "./Vector.svg";
import Tile from "../../../common/Tile";
import {
  MovieTileImg,
  MovieTileHeader,
  MovieTileYear,
  MovieTileTags,
  MovieTileTag,
  MovieAdditionalInfo,
  MovieRatingImg,
  MovieRatingText,
  MovieRatingVotes,
} from "./styled";

const MovieTile = () => {
  return (
    <Tile>
      <MovieTileImg src={img}></MovieTileImg>
      <MovieTileHeader></MovieTileHeader>
      <MovieTileYear>2020 </MovieTileYear>
      <MovieTileTags>
        <MovieTileTag>Action</MovieTileTag>
        <MovieTileTag>Adventure</MovieTileTag>
        <MovieTileTag>Kids</MovieTileTag>
      </MovieTileTags>
      <MovieAdditionalInfo>
        <MovieRatingImg src={star}></MovieRatingImg>
        <MovieRatingText>7.9</MovieRatingText>
        <MovieRatingVotes>35 votes</MovieRatingVotes>
      </MovieAdditionalInfo>
    </Tile>
  );
};

export default MovieTile;
