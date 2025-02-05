import { Component, OnInit } from '@angular/core';
import { Editorial } from './editorial';
import { EditorialService } from './editorial.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

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
