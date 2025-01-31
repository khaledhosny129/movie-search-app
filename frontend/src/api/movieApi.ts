import axios from "axios";
import { Movie, FavoriteMovie } from "../types/movie";

const API_BASE_URL = "http://localhost:3000";

export const searchMovies = async (query: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/movies/search?query=${query}`
  );
  return response.data;
};

export const getFavorites = async () => {
  const response = await axios.get<FavoriteMovie[]>(
    `${API_BASE_URL}/movies/favorites`
  );
  return response.data;
};

export const addToFavorites = async (movie: Movie) => {
  const response = await axios.post<FavoriteMovie>(
    `${API_BASE_URL}/movies/favorites`,
    {
      imdbId: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }
  );
  return response.data;
};

export const removeFromFavorites = async (id: number) => {
  await axios.delete(`${API_BASE_URL}/movies/favorites/${id}`);
};
