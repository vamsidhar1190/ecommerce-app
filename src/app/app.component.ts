import { Component,OnInit,DoCheck } from '@angular/core';
import { CartService } from './cart.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
  title = 'commerceapp';
  lscart:any
  lsCartData:any
  showdetails:boolean=true
  dontshowdetails:boolean=false
  loginValue:any
  login:any
  searchTerm:any=' '

  cartItem :number=100
  ngOnInit(): void {
  this.lscart=localStorage.getItem('cartItems')
  this.lsCartData=JSON.parse(this.lscart)
  // console.log(this.lsCartData,this.lsCartData.length)
  // this.cartItem = this.lsCartData.length

 // this.cartItemfunc()


  }

  constructor (private CartService :CartService) {

  }
  ngDoCheck(): void {
    this.loginValue=sessionStorage.getItem('loginvalue')
    this.login=JSON.parse(this.loginValue)
    if(this.login){
      this.showdetails=false
      this.dontshowdetails=true
    }
    else{
      this.showdetails=true
      this.dontshowdetails=false
    }
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value
    console.log(this.searchTerm);
    this.CartService.search.next(this.searchTerm);


  }




}
