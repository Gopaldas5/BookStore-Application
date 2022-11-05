import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistBooks:Array<any>=[];
  bookQuantityList: Array<any> = [];
  token:any="";
  constructor( private whishlistService:WishlistService, private router: Router, private route: ActivatedRoute,
    private bookService: BookService, private cartService: CartService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getWishlistBooks();
  }

  getWishlistBooks(){
    if(localStorage.getItem("token")){
      this.token=localStorage.getItem("token");
      this.whishlistService.getWishlistBooks(this.token).subscribe((response:any)=>{
        this.wishlistBooks=response.data;
        console.log("Wishlist Book", this.wishlistBooks );
        
      })
    }
  }
  getWishlistForUser() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.whishlistService.getWishlistForUser(this.token).subscribe((response: any) => {
        // this.cart_book = response.data;
        this.bookQuantityList = response.data.quantity;
        console.log("WishList book", this.wishlistBooks);
      })
    }
  }

  removeBookFromWishlist(bookId: number) {
    // this.bookQuantityList = 0;
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.whishlistService.removeBookFromWishlist(bookId, this.token).subscribe((response: any) => {
        console.log("increase Book Quantity " + response);
        // this.cart_book = response.data;
        console.log("wishlistBooks", this.wishlistBooks);
        this.ngOnInit();
      })
    }
  }


}
