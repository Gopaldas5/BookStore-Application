import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
 
 

  constructor(private http: HttpClient) { }


  baseUrl: any = "http://localhost:8080";


  addBook(bookId: number, token: string) {
    return this.http.post(this.baseUrl+"/wishlist/addToWishlist/"+bookId+"?token="+token,{});
  }

  getUserWishlist(token: any) {
   return this.http.get(this.baseUrl+"/wishlist/getBooksFromWishlist/"+token);
  }

  getWishlistBooks(token: any) {
    return this.http.get(this.baseUrl + "/cart/bookIdList/" + token);
  }
  getWishlistForUser(token: any) {
    return this.http.get(this.baseUrl + "/cart/getWishlistForUser/" + token);
  
  }
  
  removeBookFromWishlist(bookId: any, token: any) {
    return this.http.delete(this.baseUrl + "/cart/removeBookQuantity/" + bookId + "?token=" + token, {});
  }


}
