import { Component,OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {

callme(){
  sessionStorage.clear()
  localStorage.removeItem('GoogleAuth')
  Swal.fire({
    icon:'success',
    title:'logoutsuccessfully'
  })
  // this.status = !this.status;
}



}
