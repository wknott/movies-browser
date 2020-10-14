import React from "react";
import {
  DetailsTile,
  Image,
  ProductionYear,
  Text,
  Birth as ProductionAndRelease,
  MobileDescription,
  DesktopDescription,
  DesktopGrayText,
  Frame,
  Name as Title,
  Tags,
  Tag,
  MovieRatingImg,
  MovieRatingText,
  MovieRatingVotes,
  Rating,
  DesktopMovieRatingVotes,
} from "./styled";
import star from "../../MovieTile/ratingStar.svg";
import poster from "../../../../images/Poster.svg";

const MovieDetailsTile = ({ movie }) => (
  <DetailsTile>
    <Image src={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : poster} alt="" />
    <section>
      <Title>{movie.original_title}</Title>
      {movie.release_date &&
        <ProductionYear>{movie.release_date.slice(0, 4)}</ProductionYear>
      }
      <ProductionAndRelease>
        {movie.production_countries &&
          <Frame>
            <DesktopGrayText>Production:</DesktopGrayText>
            <Text>{movie.production_countries.map(country => country.name).join(", ")}</Text>
          </Frame>
        }
        {movie.release_date &&
          <Frame>
            <DesktopGrayText>Release date:</DesktopGrayText>
            <Text>{movie.release_date.slice(8, 10)}.{movie.release_date.slice(5, 7)}.{movie.release_date.slice(0, 4)}</Text>
          </Frame>
        }
      </ProductionAndRelease>
      {movie.genres &&
        <Tags>
          {movie.genres.map(genre =>
            <Tag key={genre.id}>{genre.name}</Tag>)}
        </Tags>
      }
      <Rating>
        <MovieRatingImg src={star}></MovieRatingImg>
        <MovieRatingText>{movie.vote_average}</MovieRatingText>
        <DesktopMovieRatingVotes>/ 10</DesktopMovieRatingVotes>
        <MovieRatingVotes>{movie.vote_count} votes</MovieRatingVotes>
      </Rating>
      <DesktopDescription>{movie.overview}</DesktopDescription>
    </section>
    <MobileDescription>{movie.overview}</MobileDescription>
  </DetailsTile>
);

export default MovieDetailsTile;