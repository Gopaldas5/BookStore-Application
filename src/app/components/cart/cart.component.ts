import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/model/book.model';
import { CartModel } from 'src/app/model/cart.model';
import { OrderModel } from 'src/app/model/OrderModel';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantityBook: number = 0;

  placedClick: boolean = false;
  continueclick: boolean = false;
  cartBookCount: number = 0;
  // Id:any;
  cartBookList: any;
  bookQuantityList: Array<any> = [];
  cart_book: Array<BookModel> = [];
  token: any = "";
  booksdetails: any;
  orderSum: any = "";
  userCart: any = "";

  ordersDetail: OrderModel = new OrderModel(new Date(), 0, "", new CartModel([], 0, []), "", "", "", "");


  constructor(private router: Router, private route: ActivatedRoute,
    private bookService: BookService, private cartService: CartService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    // this.Id = this.route.snapshot.paramMap.get("Id");
    this.getBooksFromCart();
    this.getCartForUser();

  }

  placedButton() {
    if (this.placedClick == false) {
      this.placedClick = true;
    }
  }

  continueButton() {
    if (this.continueclick == false) {
      this.continueclick = true;
    }
  }

  getBooksFromCart() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.cartService.getBooksCart(this.token).subscribe((response: any) => {
        this.cart_book = response.data;
        console.log("cart_book", this.cart_book);
        // this.getCartForUser();
      })
    }
  }

  getCartForUser() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.cartService.getCartForUser(this.token).subscribe((response: any) => {
        // this.cart_book = response.data;
        this.bookQuantityList = response.data.quantity;
        console.log("cart_book", this.cart_book);
      })
    }
  }

  orderPlaceDetail() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.orderService.createOrder(this.token, this.ordersDetail).subscribe((response: any) => {
        this.orderSum = response.data;
        this.router.navigate(['orderplaced']);
      });
    }

  }

  
  decreaseBookQuantity(bookId: number) {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.cartService.decreaseBookQuantityInCart(bookId, this.token).subscribe((response: any) => {
        console.log("decrease Book Quantity " + response);
        // this.cart_book = response.data;
        console.log("cart_book", this.cart_book);
        this.ngOnInit();
      })

    }
  }


  increaseBookQuantity(bookId: number) {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.cartService.increaseBookQuantityInCart(bookId, this.token).subscribe((response: any) => {
        console.log("increase Book Quantity " + response);
        // this.cart_book = response.data;
        console.log("cart_book", this.cart_book);
        this.ngOnInit();
      })
    }
  }

  removeBookFromCart(bookId: number) {
    // this.bookQuantityList = 0;
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.cartService.removeBookFromCart(bookId, this.token).subscribe((response: any) => {
        console.log("increase Book Quantity " + response);
        // this.cart_book = response.data;
        console.log("cart_book", this.cart_book);
        this.ngOnInit();
      })
    }
  }


}
