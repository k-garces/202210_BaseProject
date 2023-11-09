import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: 'editorials',
  children: [
    {
      path: 'list',
      component: EditorialListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialRoutingModule { }
