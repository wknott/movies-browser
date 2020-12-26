export const getGenreName = (genresId, genres) => {
  const genre = genres.find((genre) => genre.id === genresId);
  return genre ? genre.name : "";
};
