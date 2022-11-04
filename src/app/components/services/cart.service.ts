import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  baseUrl: any = "http://localhost:8080";


  addBook(bookId: number, token: string) {
    return this.http.post(this.baseUrl + "/cart/addToCart/" + bookId + "?token=" + token, {});
  }

  getUserCart(token: string) {
    return this.http.get(this.baseUrl + "/cart/bookIdList/" + token);
  }
  getCartForUser(token: string) {
    return this.http.get(this.baseUrl + "/cart/getCartForUser/" + token);
  }

  getBooksCart(token: any) {
    return this.http.get(this.baseUrl + "/cart/booksFromCart/" + token);
  }
  
  decreaseBookQuantityInCart(bookId: any, token: string) {
    return this.http.put(this.baseUrl + "/cart/decreaseBookQuantity/" + bookId + "?token=" + token, {});
  }


  increaseBookQuantityInCart(bookId: any, token: string) {
    return this.http.put(this.baseUrl + "/cart/increaseBookQuantity/" + bookId + "?token=" + token, {});
  }
  removeBookFromCart(bookId: any, token: any) {
    return this.http.delete(this.baseUrl + "/cart/removeBookQuantity/" + bookId + "?token=" + token, {});
  }

}
