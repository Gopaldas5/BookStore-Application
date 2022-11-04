import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataModel } from 'src/app/model/userData.model';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  baseUrl:any = "http://localhost:8080";

  loginUser(userLoginData:any){
    return this.http.post(this.baseUrl+"/user/toLogin",userLoginData);
  }

  addUser(userData:UserDataModel){
    return this.http.post(this.baseUrl+"/user/addUserToFront",userData);
  }

}
