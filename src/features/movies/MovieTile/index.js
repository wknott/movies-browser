import React from "react";
import star from "./ratingStar.svg";
import Tile from "../../../common/Tile";
import Poster from "../../../images/Poster.svg"
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
import { Link } from "react-router-dom";
import { toMovie } from "../../../routes";

const generateTags = (tagNames) => {
  if (tagNames) {
    return tagNames.map((tagName) => {
      return <MovieTileTag key={nanoid()}>{tagName}</MovieTileTag>;
    });
  }
};

const MovieTile = (props) => {
  return (
    <Tile as={Link} to={toMovie({ id: props.movie.id })}>
      <MovieTileImg
        src={props.movie.poster_path ? `https://image.tmdb.org/t/p/w400${props.movie.poster_path}` : Poster}
      ></MovieTileImg>
      <MovieInfoWrapper>
        <MovieTileHeader>{props.movie.title}</MovieTileHeader>
        <MovieTileYear>{props.movie.release_date ? props.movie.release_date.slice(0, 4) : "????"}</MovieTileYear>
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
