import { Router,  } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit,DoCheck {
  auth2:any
  regForm = new FormGroup({
    login_uname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    login_pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private authService: SocialAuthService,
    private Router:Router
    ) { }
  ngDoCheck(): void {
    if(localStorage.getItem('GoogleAuth')) {
      // this.Router.navigate(['/products'])
    }
  }

  login_usernames: any = [];
  login_pwds: any = [];
  getlocalstorage: any;
  x: any;
  passwords: any;
  loginvalue:any
  @ViewChild('loginRef', {static: true }) loginElement!: ElementRef;
  user: SocialUser | undefined;
  loggedIn: boolean | undefined;

  googleDatalocal:any
  uploadData:any=[]
  Details:Object={}
  email: any;
  firstName: any;
  photoUrl: any;


  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      console.log(this.authService);
      console.log(this.user.email,this.user.firstName);

      this.googleDatalocal=this.user.email
      this.Details={ email:this.user.email,name:this.user.firstName,photoId:this.user.photoUrl}
      // console.log('data',Details);
      localStorage.setItem("GoogleAuth",JSON.stringify(this.Details));
      this.Router.navigate(['/products'])
    });
    this.getlocalstorage = localStorage.getItem('Signupdata');
    console.log(this.getlocalstorage);
    this.x = JSON.parse(this.getlocalstorage);
    console.log(this.x);
    if (this.x) {
      this.login_usernames = this.x.map((each: any) => `${each.uname}`);
      this.login_pwds = this.x.map((each: any) => `${each.pwd}`);
    }
    console.log(this.login_usernames);
    console.log(this.login_pwds);
  }
  show() {
    for (let i = 0; i < this.login_usernames.length; i++) {
      if (this.regForm.get('login_uname')?.value == this.login_usernames[i]) {
        // console.log(this.login_pwds[i]);
        this.passwords = this.login_pwds[i];
        if (this.regForm.get('login_pwd')?.value === this.passwords) {
          console.log(typeof(this.regForm.get('login_pwd')?.value));
          console.log(typeof(this.passwords));
          console.log('password name exist');
          Swal.fire({
            icon: 'success',
            title: 'login successfully',
          });
          this.Router.navigate(['/products'])
          this.loginvalue=1
          sessionStorage.setItem('loginvalue',this.loginvalue)
          console.log(this.loginvalue);
          break;
        }
        else {
          Swal.fire({
            icon: 'warning',
            title: 'Enter Correct password',
          });
        }
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'username incorrect',
        });
      }
    }
  }
}


