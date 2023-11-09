import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';

const routes: Routes = [{
  path: 'authors',
  children: [
    {
      path: ':list',
      component: AuthorListComponent
    },
    {
      path: ':id',
      component: AuthorDetailComponent
    }
    
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class AuthorRoutingModule { }
