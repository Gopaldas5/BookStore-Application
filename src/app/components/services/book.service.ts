import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  baseUrl:any = "http://localhost:8080";
 

  constructor(private http: HttpClient) { }

  getAllbooks() {
    return this.http.get("http://localhost:8080/bookstore/getAllBook");
  }

  getBookById(bookId:any){
    return this.http.get("http://localhost:8080/bookstore/getBookByID/"+bookId);
  };
  
}
