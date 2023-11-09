import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Editorial } from './editorial';


@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  private apiUrl: string = environment.baseUrl + 'editorials';

  constructor(private http: HttpClient) { }

  getEditorials(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.apiUrl);
  }

  getEditorial(id: string): Observable<Editorial> {
    return this.http.get<Editorial>(this.apiUrl + "/" + id);
  }
}
