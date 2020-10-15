import React from "react";
import { useSelector } from "react-redux";
import { selectGenres } from "../moviesSlice";
import { StyledMoviesContainer } from "./styled";
import MovieTile from "../MovieTile";
import { getGenreName } from "../getGenreName";

export const MoviesContainer = ({ movies }) => {
  const genres = useSelector(selectGenres);

  const mapGenreIds = (genreIds, genres) => {
    return genreIds.map((genreId) => {
      return getGenreName(genreId, genres);
    });
  };

  const generateMovies = (movies) => {
    return movies.map((movie) => {
      const genreNames = mapGenreIds(movie.genre_ids, genres);
      return (
        <MovieTile
          key={movie.id}
          genreNames={genreNames}
          movie={movie}
        />
      );
    });
  };
  return <StyledMoviesContainer>{generateMovies(movies)}</StyledMoviesContainer>;
};
