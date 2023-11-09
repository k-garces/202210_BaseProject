import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorialRoutingModule } from './editorial-routing.module';
import { EditorialListComponent } from './editorial-list/editorial-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorialRoutingModule
  ],
  declarations: [EditorialListComponent]
})
export class EditorialModule { }
