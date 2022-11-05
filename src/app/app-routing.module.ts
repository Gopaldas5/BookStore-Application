import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/bookheader/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
{path:'',redirectTo:'/dashboard',pathMatch:'full'},
{path:"dashboard",component:DashboardComponent},
{path:"cart",component:CartComponent},
{path:"orderplaced",component:OrderplacedComponent},
{path:"header",component:HeaderComponent},
{path:"register",component:RegisterUserComponent},
{path:"wishlist",component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
