import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/books';

  constructor(private httpClient: HttpClient) {}

  getBooks(theCategoryId: number): Observable<Book[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient.get<getResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.books)
    );
}
}


// tslint:disable-next-line:class-name
interface getResponseBooks{
_embedded: {
    books: Book[];
  };
}
