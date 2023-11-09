import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule, Routes } from '@angular/router';
//import { BookRoutingComponent } from './book-routing.component';

const routes: Routes = [{
  path: 'books',
  children: [
    {
      path: 'list',
      component: BookListComponent
    },
    {
      path: ':id',
      component: BookDetailComponent
    },
  ]
 }];


 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })

export class BookRoutingModule { }
