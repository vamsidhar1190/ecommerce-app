import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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
  // show(){
  //   console.log(this.regForm.value);
  // }
  login_usernames: any = [];
  login_pwds: any = [];
  getlocalstorage: any;
  x: any;
  passwords: any;
  loginvalue:any
  @ViewChild('loginRef', {static: true }) loginElement!: ElementRef;

  ngOnInit(): void {
// google authication
this.googleAuthSDK();


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
        console.log(this.login_pwds[i]);
        this.passwords = this.login_pwds[i];
        if (this.regForm.get('login_pwd')?.value == this.passwords) {
          console.log('password name exist');
          Swal.fire({
            icon: 'success',
            title: 'login successfully',
          });
          this.loginvalue=1
          sessionStorage.setItem('loginvalue',this.loginvalue)

        }
        else {
          Swal.fire({
            icon: 'warning',
            title: 'Enter Correct password',
          });

        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'username incorrect',
        });
      }
    }
  }

// google authication

callLoginButton() {

  this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
    (googleAuthUser:any) => {

      let profile = googleAuthUser.getBasicProfile();
      console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());

     /* Write Your Code Here */

    }, (error:any) => {
      alert(JSON.stringify(error, undefined, 2));
    });

}


googleAuthSDK() {

  (<any>window)['googleSDKLoaded'] = () => {
    (<any>window)['gapi'].load('auth2', () => {
      this.auth2 = (<any>window)['gapi'].auth2.init({
        client_id: 'http://localhost:4200/login',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.callLoginButton();
    });
  }

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script');
    js.id = id;
    js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
    fjs?.parentNode?.insertBefore(js, fjs);
  }(document, 'script', 'google-jssdk'));

}




}
