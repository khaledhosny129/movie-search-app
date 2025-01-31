import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { PrismaModule } from './prisma/prisma.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    MoviesModule,
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
