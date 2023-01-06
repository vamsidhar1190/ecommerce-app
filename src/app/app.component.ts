import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'commerceapp';
  lscart:any
  lsCartData:any

  cartItem :number=100
  ngOnInit(): void {
  this.lscart=localStorage.getItem('cartItems')
  this.lsCartData=JSON.parse(this.lscart)
  // console.log(this.lsCartData,this.lsCartData.length)
  this.cartItem = this.lsCartData.length

  // this.cartItemfunc()

  }


  // cartItemfunc(){
  //   if(localStorage.getItem( 'cartItems')!=null){
  //     var cartcount= JSON.parse(localStorage.getItem('cartItems'));
  //     console.log(cartcount);
  //   }

  // }


}
