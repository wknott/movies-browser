import React from "react";
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
  MovieInfoWrapper,
} from "./styled";

const MovieTile = (movie) => {
  return (
    <Tile>
      <MovieTileImg
        src={
          `https://image.tmdb.org/t/p/w400${movie.movie.poster_path}` ||
          `./default_poster.svg`
        }
      ></MovieTileImg>
      <MovieInfoWrapper>
        <MovieTileHeader>{movie.movie.title}</MovieTileHeader>
        <MovieTileYear>{movie.movie.release_date.slice(0, 4)}</MovieTileYear>
        <MovieTileTags>
          <MovieTileTag>Action</MovieTileTag>
          <MovieTileTag>Adventure</MovieTileTag>
          <MovieTileTag>Kids</MovieTileTag>
        </MovieTileTags>
        <MovieAdditionalInfo>
          <MovieRatingImg src={star}></MovieRatingImg>
          <MovieRatingText>{movie.movie.vote_average}</MovieRatingText>
          <MovieRatingVotes>{movie.movie.vote_count} votes</MovieRatingVotes>
        </MovieAdditionalInfo>
      </MovieInfoWrapper>
    </Tile>
  );
};

export default MovieTile;
