export class UserDataModel{
    fullName:string="";
    email:string="";
    password:string="";
    phoneNumber:string="";
    
    constructor(fullName:string, email:string, password:string, phoneNumber:string){
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}