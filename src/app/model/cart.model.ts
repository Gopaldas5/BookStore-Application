export class CartModel{
    bookId:Array<number>=[];
    userId:number=0;
    quantity:Array<number>=[];
  
    constructor( bookId:Array<number>, userId:number, quantity:Array<number>){
        this.bookId = bookId;
        this.userId = userId;
        this.quantity = quantity;
    }
}