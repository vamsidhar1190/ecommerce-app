import { CartService } from './../cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  product: any=[]
  grandTotal:any=0
  totalItem: number =0
  cartItemsArr:any

  constructor (private cartService:CartService) { }

  ngOnInit(): void {
    // // this.cartService.getProducts().subscribe(res=>{
    // //   this.product =res;
    // //   console.log(this.product);

    // //   this.grandTotal=this.cartService.getTotalprice()
    // // })
    // this.lsJson=localStorage.getItem('cartItems')
    // this.cartItemsArr=JSON.parse(this.lsJson)

    this.cartItemsArr=this.cartService.mycart

  }
  removeItem(item:number){
    // this.cartService.removeCartItem(item)
    this.cartItemsArr.splice(item,1)
    // this.newlsdata=JSON.stringify(this.cartItemsArr)
    // localStorage.setItem('cartItems',this.newlsdata)
  }
  emptycart(){
    this.cartService.removeAll()
    console.log(this.emptycart);

  }

  Increase(item:any){
    // console.log(item.quantity);
    // item.quantity = item.quantity +1
    if(item.quantity!=5){
      item.quantity+=1
      console.log(item);
      item.quantity*item.price
      console.log(item.quantity*item.price);


    }
  }
  Decrease(item:any){
    // item.quantity = item.quantity -1
    if(item.quantity !=1){
      item.quantity -=1
    }
  }







}
