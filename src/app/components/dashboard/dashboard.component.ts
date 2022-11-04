import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/model/book.model';
import { CartModel } from 'src/app/model/cart.model';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

// interface booksortlist {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  // booksort: booksortlist[] = [
  // { value: '1', viewValue: ' Sort by relevence' },
  // { value: '2', viewValue: ' Price: High to low' },
  // { value: '3', viewValue: 'Price: Low to High' },
  // { value: '4', viewValue: 'rating' },
  // ];

  bookList: any = [];
  token: any = "";
  cartBookList: Array<any> = [];
  cartBookCount: number = 0;
  bookIdList: any = [];
  wishlistBooks:Array<any>=[];
  // bookQuantityList:any=[];
  userCart: CartModel = new CartModel([],0,[]);

  constructor(private router: Router, private bookService: BookService,
    private route: ActivatedRoute, private cartService: CartService, private wishlistService:WishlistService) { }

// totallength:any;
// page:number=1;

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getAllbook();
    this.getCartBooks();
    // this.totallength
  }
 
  sortBooks(sortOption:string){
    console.log(sortOption);
    if (sortOption == 'LowToHigh') {
      
    } else if(sortOption == 'HighToLow') {
      
    }
  }

  getAllbook() {
    this.bookService.getAllbooks().subscribe((responce: any) => {
      this.bookList = responce.data;
      console.log(this.bookList);
    });
  }


  addCart(bookId:number){
    this.router.navigate(['cart',bookId]);
  }
  addBookToCart(bookId: number) {
    console.log(bookId)
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.cartService.addBook(bookId, this.token).subscribe((response: any) => {
        console.log(response);
        this.getCartBooks();

      });
    }

  }
  getCartBooks() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.cartService.getUserCart(this.token).subscribe((response: any) => {
        this.cartBookList = response.data;
        this.cartBookCount = this.cartBookList.length;
      });
    }
  }


  addBookToWishlist(bookId:number){
    console.log(bookId);
    if(localStorage.getItem("token")){
      this.token=localStorage.getItem("token");
      this.wishlistService.addBook(bookId,this.token).subscribe((response:any)=>{
        console.log(response);
        this.getWishlistBooks();
      });
    }
    
  }
 // getUserWishlist() {
  //   if (this.token) {
  //     this.wishlistService.getUserWishlist(this.token).subscribe((response: any) => {
  //       this.wishlistBooks = response.data.bookIdList;
  //     })
  //   }
  // }
  getWishlistBooks() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.wishlistService.getUserWishlist(this.token).subscribe((response: any) => {
        this.wishlistBooks = response.data;
      });
    }
  }
 
  searchText: string='';
  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue;
    console.log(this.searchText);
    
  }
 

}
