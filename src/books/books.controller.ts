/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { LoggerService } from 'src/logger/logger.service';
import { FileLoggerService } from 'src/file-logger/file-logger.service';

@Controller('books')
export class BooksController {

    // performing dependency(service class) injection
    // constructor(private bookService: BooksService){}

    // @Post()
    // create(@Body() book: any){
    //     return this.bookService.create(book)
    // }
    
    // @Get()
    // findAll(){
    //     return this.bookService.findAll()
    // }

    // @Get(':id')
    // findOne(@Param('id', ParseIntPipe) id: number){
    //     return this.bookService.findOne(id)
    // }

    // @Put(':id')
    // update(@Param('id',ParseIntPipe)id: number, @Body() book){
    //     return this.bookService.update(id,book)
    // }

    // @Delete(':id')
    // remove(@Param('id', ParseIntPipe) id: number){
    //      return this.bookService.remove(id)
    // }


    private books: any[] = []
    private idCounter = 1

    constructor(
        private logger: FileLoggerService,
        @Inject('DYNAMIC_LOGEER') private dynLogger: any,
        @Inject('API_CONFIG') private config: any,
        @Inject('FILE_LOGGER') private fileLogger: any
    
    ){}

    @Post()
    create(@Body() book: any){
       const newBook = { id: this.idCounter++ , ...book}
       this.books.push(newBook)
          
       this.logger.log(`Book created: ${book.title}`)
       this.dynLogger.log(`Dynamic log: Book Created: ${book.title}`)
       console.log(`API BASE URL: ${this.config.baseUrl}`)
        this.fileLogger.log(`File log: Book created: ${book.title}`)
       return newBook
    }
}
//  Tight coupling
// dev -> console , prod -> file 
