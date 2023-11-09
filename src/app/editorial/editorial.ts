import { Book } from "../book/book";

export class Editorial {
    id: number;
    name: string;
    books: Array<Book> = [];
   
    constructor(id: number, name: string, books: Array<Book>) {
      this.id = id;
      this.name = name;
      this.books = books;
    }
}