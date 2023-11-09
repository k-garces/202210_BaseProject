import { Component, OnInit } from '@angular/core';
import { Editorial } from '../editorial';
import { EditorialService } from '../editorial.service';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css']
})
export class EditorialListComponent implements OnInit {

  editorials: Array<Editorial> = [];
  constructor(private editorialService: EditorialService) { }

  getEditorials(){
    this.editorialService.getEditorials().subscribe(editorials=>{
      this.editorials = editorials;
    })
  }

  ngOnInit() {
    this.getEditorials();
  }

}
