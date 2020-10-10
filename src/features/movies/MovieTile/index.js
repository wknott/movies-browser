import React from "react";
import star from "./ratingStar.svg";
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
  MovieInfoWrapper,
} from "./styled";
import { nanoid } from "@reduxjs/toolkit";

const generateTags = (tagNames) => {
  if (tagNames) {
    return tagNames.map((tagName) => {
      return <MovieTileTag key={nanoid()}>{tagName}</MovieTileTag>;
    });
  }
};

const MovieTile = (props) => {
  return (
    <Tile>
      <MovieTileImg
        src={
          `https://image.tmdb.org/t/p/w400${props.movie.poster_path}` ||
          `./default_poster.svg`
        }
      ></MovieTileImg>
      <MovieInfoWrapper>
        <MovieTileHeader>{props.movie.title}</MovieTileHeader>
        <MovieTileYear>{props.movie.release_date}</MovieTileYear>
        <MovieTileTags>{generateTags(props.genreNames)}</MovieTileTags>
        <MovieAdditionalInfo>
          <MovieRatingImg src={star}></MovieRatingImg>
          <MovieRatingText>{props.movie.vote_average}</MovieRatingText>
          <MovieRatingVotes>{props.movie.vote_count} votes</MovieRatingVotes>
        </MovieAdditionalInfo>
      </MovieInfoWrapper>
    </Tile>
  );
};

export default MovieTile;
