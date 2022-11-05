import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataModel } from 'src/app/model/userData.model';
import { UserloginModel } from 'src/app/model/userlogin.model';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  // userService: any;
  token: string = "";

  userLoginData: UserloginModel = new UserloginModel("", "");
  // usersignUp: any = { fullName: "", email: "", password: "", mobileNumber: "" };
  userData: UserDataModel = new UserDataModel("", "", "", "");

  constructor(private router: Router, private route: ActivatedRoute, private userDataService: UserDataService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userDataService.loginUser(this.userLoginData).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem("token",response.data);
        this.router.navigate(['dashboard']);
        
     }); // },(error)=>{console.log("error");
    //   localStorage.setItem("token",error);
    //   this.router.navigate(['dashboard']);
    //   });
  }

  userSignUp() {
    console.log(this.userData);
    this.userDataService.addUser(this.userData).subscribe((response: any) => {
      this.token = response.data;
      console.log(this.token);
      this.router.navigate(['dashboard']);
    });

  }



}
