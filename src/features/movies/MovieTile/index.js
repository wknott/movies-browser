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
import { votes } from "../../../languages";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import { useSelector } from "react-redux";

const generateTags = (tagNames) => {
  if (tagNames) {
    return tagNames.map((tagName) => {
      return <MovieTileTag key={nanoid()}>{tagName}</MovieTileTag>;
    });
  }
};

const MovieTile = ({ movie }) => {
  const language = useSelector(selectLanguage);

  return (
    <Tile as={Link} to={toMovie({ id: movie.id })}>
      <MovieTileImg
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : Poster}
      ></MovieTileImg>
      <MovieInfoWrapper>
        <MovieTileHeader>{movie.title}</MovieTileHeader>
        <MovieTileYear>
          {movie.character ? `${movie.character} (${movie.release_date ? movie.release_date.slice(0, 4) : "????"})` :
            movie.job ? `${movie.job} (${movie.release_date ? movie.release_date.slice(0, 4) : "????"})`
              : movie.release_date ? movie.release_date.slice(0, 4) : "????"}
        </MovieTileYear>
        <MovieTileTags>{generateTags(movie.genres)}</MovieTileTags>
        <MovieAdditionalInfo>
          <MovieRatingImg src={star}></MovieRatingImg>
          <MovieRatingText>{movie.vote_average}</MovieRatingText>
          <MovieRatingVotes>{movie.vote_count} {votes[language]}</MovieRatingVotes>
        </MovieAdditionalInfo>
      </MovieInfoWrapper>
    </Tile>
  );
}

export default MovieTile;
