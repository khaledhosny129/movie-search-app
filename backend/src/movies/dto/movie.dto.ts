import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MovieSearchDto {
  @ApiProperty({
    description: 'Search query for movies',
    example: 'Batman',
  })
  @IsString()
  @IsNotEmpty()
  query: string;
}

export class CreateFavoriteMovieDto {
  @ApiProperty({
    description: 'IMDB ID of the movie',
    example: 'tt0096895',
  })
  @IsString()
  @IsNotEmpty()
  imdbId: string;

  @ApiProperty({
    description: 'Title of the movie',
    example: 'Batman',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Year of release',
    example: '1989',
  })
  @IsString()
  @IsNotEmpty()
  year: string;

  @ApiProperty({
    description: 'URL of the movie poster',
    example: 'https://example.com/poster.jpg',
  })
  @IsString()
  @IsNotEmpty()
  poster: string;
}