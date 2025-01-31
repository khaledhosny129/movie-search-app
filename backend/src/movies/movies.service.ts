import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFavoriteMovieDto } from './dto/movie.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MoviesService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async searchMovies(query: string) {
    try {
      const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
          apikey: this.configService.get('OMDB_API_KEY'),
          s: query,
        },
      });

      if (response.data.Error) {
        throw new HttpException(response.data.Error, HttpStatus.NOT_FOUND);
      }

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data?.Error || 'Failed to fetch movies',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createFavorite(createFavoriteMovieDto: CreateFavoriteMovieDto) {
    try {
      return await this.prisma.favoriteMovie.create({
        data: createFavoriteMovieDto,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException(
          'Movie already in favorites',
          HttpStatus.CONFLICT,
        );
      }
      throw error;
    }
  }

  async getFavorites() {
    return this.prisma.favoriteMovie.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async deleteFavorite(id: number) {
    try {
      return await this.prisma.favoriteMovie.delete({
        where: { id },
      });
    } catch (error) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }
  }
}
