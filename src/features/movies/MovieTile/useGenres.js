import { MovieTileTag } from "./styled";
import { useQuery } from "react-query";
import { getGenres } from "../api";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";

const getGenreName = (genreId, genres) => {
  const genre = genres.find((genre) =>
    genreId === genre.id ? genre.name : null
  );
  return genre.name;
};

const generateTags = (tagIds, genres) => {
  if (tagIds && genres) {
    const tags = tagIds.map((tagId) => getGenreName(tagId, genres));
    return tags.map((tag, index) => (
      <MovieTileTag key={index}>{tag}</MovieTileTag>
    ));
  }
};

export const useGenres = (tagIds) => {
  const language = useSelector(selectLanguage);

  const { data: genres } = useQuery(["genres", { language }], getGenres);

  return generateTags(tagIds, genres);
};
