import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateFavoriteMovieDto } from './dto/movie.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @ApiOperation({ summary: 'Search movies from OMDB API' })
  @ApiQuery({
    name: 'query',
    description: 'Search term for movies',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Returns list of movies matching the search query',
  })
  @Get('search')
  searchMovies(@Query('query') query: string) {
    return this.moviesService.searchMovies(query);
  }

  @ApiOperation({ summary: 'Get all favorite movies' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of favorite movies',
  })
  @Get('favorites')
  getFavorites() {
    return this.moviesService.getFavorites();
  }

  @ApiOperation({ summary: 'Add a movie to favorites' })
  @ApiResponse({
    status: 201,
    description: 'Movie has been added to favorites',
  })
  @ApiResponse({
    status: 409,
    description: 'Movie already exists in favorites',
  })
  @Post('favorites')
  createFavorite(@Body() createFavoriteMovieDto: CreateFavoriteMovieDto) {
    return this.moviesService.createFavorite(createFavoriteMovieDto);
  }

  @ApiOperation({ summary: 'Delete a movie from favorites' })
  @ApiParam({
    name: 'id',
    description: 'ID of the favorite movie to delete',
    type: 'number',
  })
  @ApiResponse({
    status: 200,
    description: 'Movie has been removed from favorites',
  })
  @ApiResponse({
    status: 404,
    description: 'Movie not found',
  })
  @Delete('favorites/:id')
  deleteFavorite(@Param('id') id: string) {
    return this.moviesService.deleteFavorite(Number(id));
  }
}
