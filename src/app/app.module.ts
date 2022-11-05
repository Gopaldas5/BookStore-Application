import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/bookheader/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { BookfooterComponent } from './components/bookfooter/bookfooter.component';
import {MatCardModule} from '@angular/material/card';
import { CartComponent } from './components/cart/cart.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import {MatInputModule} from '@angular/material/input';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { NgxPaginationModule } from 'ngx-pagination';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    BookfooterComponent,
    CartComponent,
    OrderplacedComponent,
    RegisterUserComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTabsModule,
    MatRadioModule,
    MatBadgeModule,
    NgxPaginationModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
