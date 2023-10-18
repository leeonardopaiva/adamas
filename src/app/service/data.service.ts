import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Post {
  // id: number;
  // userId: number;
  // body: string;
  category: string;
}


@Injectable({
  providedIn: 'root'
})

export class DataService {

  apiUrl = 'https://fakestoreapi.com/products?limit=2';  // https://jsonplaceholder.typicode.com/posts?_limit=8

  constructor(private http: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.apiUrl);
    }

}
