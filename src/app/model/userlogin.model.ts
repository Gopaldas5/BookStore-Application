export class UserloginModel{
    
    email:string = "";
    password:string = "";

    constructor( email:string, password:string){
        this.password = password;
        this.email = email;
    }
}