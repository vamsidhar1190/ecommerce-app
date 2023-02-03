
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component, } from '@angular/core';
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoreProductsComponent } from './more-products/more-products.component';
import { ImageCropperModule } from "ngx-image-cropper";
import { NgToastModule } from 'ng-angular-popup';
import { AngularDropdownModule } from 'angular-dropdown';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';




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
    path:'moreProducts', component:MoreProductsComponent
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
    FilterPipe,
    MoreProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    SweetAlert2Module,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ImageCropperModule,
    NgToastModule,
    SocialLoginModule,
    MdbDropdownModule

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '345225537091-a3tcgbt1u9ubuu3pk10ggbp3gf0nhtbe.apps.googleusercontent.com'
            )
          },

        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
