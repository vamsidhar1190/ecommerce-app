import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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


  ngOnInit(): void {
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
}
