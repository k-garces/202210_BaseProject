/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookDetailComponent } from './book-detail.component';
import { Editorial } from 'src/app/editorial/editorial';
import { Author } from 'src/app/author/author';
import { BookDetail } from '../bookDetail';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '../book.service';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      imports : [HttpClientModule, RouterTestingModule],
      providers: [BookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;

    const editorial = new Editorial(
      faker.datatype.number(),
      faker.lorem.sentence()
    );
 
    const authors: Author[] = [];
    for (let i = 0; i < 3; i++) {
     const author = new Author (
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
     );
     authors.push(author);
   }
 
    component.bookDetail= new BookDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.date.past(),
        editorial,
        authors,
        []
      );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
