export const toMovie = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toMovies = () => "/movies";
export const toPerson = ({ id } = { id: ":id" }) => `/people/${id}`;
export const toPeople = () => "/people";
