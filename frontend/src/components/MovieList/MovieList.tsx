import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import MovieCard from '../MovieCard/MovieCard';
import { Movie, FavoriteMovie } from '../../types/movie';

interface MovieListProps {
  movies: (Movie | FavoriteMovie)[];
  favorites: FavoriteMovie[];
  onToggleFavorite: (movie: Movie | FavoriteMovie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, favorites, onToggleFavorite }) => {
  if (!movies.length) {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" align="center">
          No movies found
        </Typography>
      </Box>
    );
  }

  return (
    <div className="movie-grid">
      <Grid container spacing={3}>
        {movies.map((movie) => {
          const imdbId = 'imdbID' in movie ? movie.imdbID : movie.imdbId;
          const isFavorite = favorites.some((fav) => fav.imdbId === imdbId);

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={imdbId}>
              <MovieCard
                movie={movie}
                isFavorite={isFavorite}
                onToggleFavorite={() => onToggleFavorite(movie)}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MovieList;