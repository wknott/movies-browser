export const getGenreName = (genreId, genres) => {
  const genre = genres.find((genre) =>
    genreId === genre.id ? genre.name : null
  );
  return genre.name;
};
