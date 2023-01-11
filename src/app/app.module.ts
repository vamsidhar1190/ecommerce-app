
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule} from "@angular/forms";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';






const route:Routes=[
  {
    path:'',component:HomeComponent
  },
   {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'logout',component:LogoutComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'**', component:HomeComponent
  }

]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    SweetAlert2Module,
    NgbModule,
    HttpClientModule,
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
