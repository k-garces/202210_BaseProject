import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorListComponent } from './author-list/author-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthorRoutingModule
  ],
  declarations: [AuthorDetailComponent, AuthorListComponent]
})
export class AuthorModule { }
