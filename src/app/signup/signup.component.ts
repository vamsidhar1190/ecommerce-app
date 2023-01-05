import { Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  localstoreArr:any=[]
  signupform = new FormGroup({
    uname: new FormControl("",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("",[Validators.email]),
    pwd:new FormControl("",[Validators.required,Validators.minLength(4)]),
    cpwd:new FormControl("",[Validators.required,Validators.minLength(4)])
})
get uname(){
  return this.signupform.get('uname')
}
get email(){
  return this.signupform.get('email')
}get pwd(){
  return this.signupform.get('pwd')
}get cpwd(){
  return this.signupform.get('cpwd')
}
Signupdata:any
register(){
  console.log(this.signupform);
  let data={ uname:this.uname?.value,email:this.email?.value,pwd:this.pwd?.value}
  this.localstoreArr.push(data)
  localStorage.setItem("Signupdata",JSON.stringify(this.localstoreArr));
  if (this.signupform.valid) {
    this.signupform.reset()
  Swal.fire({
  icon:'success',
  title:'Signup successfully'
})
  } else {
    Swal.fire({
  icon:'error',
  title:'Signup not registered'
})
  }
}
}


