/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
    private movies: any[] = []
    private idCounter: number = 1

 
    // Add a movie
    @Post()
    create(@Body() body: CreateMovieDto ): CreateMovieDto{
        console.log(body)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const newMovie = {id: this.idCounter++, ...body}
        this.movies.push(newMovie)
        return newMovie

    }

    // update a movie
    @Put(':id')
    update(@Param('id',ParseIntPipe) id: number, @Body() body: CreateMovieDto):any{
         
         const movie =  this.movies.find((m:any) => m.id === id)
         if(!movie) return { message: 'Movie not found'}
         Object.assign(movie,body)
         return movie

    }

  


}
