export class WishlistModel{
    userId:number=0;
    bookId:Array<number>=[];

    constructor(userId:number, bookId:Array<number>){
        this.userId= userId;
        this.bookId=bookId;
    }

   

}