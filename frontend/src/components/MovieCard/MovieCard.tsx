import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Movie, FavoriteMovie } from '../../types/movie';

interface MovieCardProps {
  movie: Movie | FavoriteMovie;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite, onToggleFavorite }) => {
  const title = 'Title' in movie ? movie.Title : movie.title;
  const year = 'Year' in movie ? movie.Year : movie.year;
  const poster = 'Poster' in movie ? movie.Poster : movie.poster;

  return (
    <Card className="movie-card">
      <div className="movie-poster">
        <CardMedia
          component="img"
          height="400"
          image={poster}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <Box className="favorite-button">
          <IconButton onClick={onToggleFavorite} color="primary">
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Box>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;