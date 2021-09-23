import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44304/api/posts/all'

  getAll(headers: HttpHeaders): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.url}`, {headers: headers});
  }

}
