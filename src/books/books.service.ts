/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

    private books: any[] = []
    private idCounter = 1

    findAll():any{
        return this.books
    }

    findOne(id: number):any{
        return this.books.find(b => b.id === id) || {message: 'Book not found'}
    }

    create(book: any): any{
       const newBook = { id: this.idCounter++ , ...book}
       this.books.push(newBook)
       return newBook
    }
  
    update(id: number, book){
         const existing = this.books.find(b=> b.id === id)
         if(!existing) return {message: "Book not found"}
         Object.assign(existing, book)
         return existing
    }

    remove(id: number){
         this.books = this.books.filter(b =>b.id !== id)
         return { message: `Book ${id} deleted`}
    }
}
