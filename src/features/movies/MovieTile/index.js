import React from "react";
import star from "./ratingStar.svg";
import Tile from "../../../common/Tile";
import Poster from "../../../images/Poster.svg";
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
import { Link } from "react-router-dom";
import { toMovie } from "../../../routes";
import { votes } from "../../../common/languages";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import { useSelector } from "react-redux";
import { selectGenres } from "../../genres/genresSlice";
import { getGenreName } from "../../genres/getGenreName";

const generateTags = (tagIds, genres) => {
  if (tagIds && genres) {
    const tags = tagIds.map((tagId) => getGenreName(tagId, genres));
    return tags
      ? tags.map((tag, index) => {
          return <MovieTileTag key={index}>{tag}</MovieTileTag>;
        })
      : "";
  }
};

const MovieTile = ({ movie }) => {
  const language = useSelector(selectLanguage);
  const genres = useSelector(selectGenres);
  return (
    <Tile as={Link} to={toMovie({ id: movie.id })}>
      <MovieTileImg
        url={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
            : Poster
        }
      />
      <MovieInfoWrapper>
        <MovieTileHeader>{movie.title}</MovieTileHeader>
        <MovieTileYear>
          {movie.character
            ? `${movie.character} (${
                movie.release_date ? movie.release_date.slice(0, 4) : "????"
              })`
            : movie.job
            ? `${movie.job} (${
                movie.release_date ? movie.release_date.slice(0, 4) : "????"
              })`
            : movie.release_date
            ? movie.release_date.slice(0, 4)
            : "????"}
        </MovieTileYear>
        <MovieTileTags>{generateTags(movie.genre_ids, genres)}</MovieTileTags>
        <MovieAdditionalInfo>
          <MovieRatingImg src={star}></MovieRatingImg>
          <MovieRatingText>{movie.vote_average.toFixed(1)}</MovieRatingText>
          <MovieRatingVotes>
            {movie.vote_count} {votes[language]}
          </MovieRatingVotes>
        </MovieAdditionalInfo>
      </MovieInfoWrapper>
    </Tile>
  );
};

export default MovieTile;
