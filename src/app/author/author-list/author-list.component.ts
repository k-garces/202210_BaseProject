import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Array<Author> = [];
  selectedAuthor!: Author;
  selected: boolean = false;

  constructor(private authorService: AuthorService) { }

  getAuthors(){
    this.authorService.getAuthors().subscribe(authors=>{
      this.authors = authors;
    })
  }

  selectAuthor(author: Author){
    this.selectedAuthor = author;
    this.selected = true;
  }

  ngOnInit() {
    this.getAuthors();
  }

}
