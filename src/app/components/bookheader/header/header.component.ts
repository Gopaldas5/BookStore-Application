import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataModel } from 'src/app/model/userData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openProfile: boolean=false;
  token: string | null = localStorage.getItem("token");
  userName: UserDataModel = new UserDataModel("", "", "", "");
  @Input() numberOfCart:any;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.token= localStorage.getItem("token");
  }


enteredSearchValue:string='';
@Output()
serachTextChanged: EventEmitter<string>=new EventEmitter<string>();

onsearchTextChanged(){
  this.serachTextChanged.emit(this.enteredSearchValue);
}


  register() {
    this.router.navigate(["register"]);
  }

  cart() {
    this.router.navigate(["cart"]);
  }

  dashboard() {
    this.router.navigate(["dashboard"]);
  }
  profile() {
    this.openProfile= (this.openProfile == true) ? false : true
  }

  openWishlist(){
    this.router.navigate(["wishlist"]);    
  }

 
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    this.openProfile = false;
    this.ngOnInit();
    // this.reloadComponent.emit(true);
    this.router.navigate(["dashboard"]);
  }

}
