import { ProductsComponent } from './../products/products.component';
import { CartService } from './../cart.service';
import { Component,OnInit,DoCheck } from '@angular/core';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck{
  static productList // console.log(item);
    () {
      throw new Error('Method not implemented.');
  }
  static this: any;
  static priceArr() {
    throw new Error('Method not implemented.');
  }

  product: any=[]
  grandTotal:any=0
  totalItem: number =0
  cartItemsArr:any=[]
  total:any= []
  cartArr=[]
  cartItemPrice:any=[]
  totalprice:number=0
  static lsCartData: any;




  constructor (private cartService:CartService) {
    this.cartItemsArr=this.cartService.priceArr;
  }
  ngOnInit(): void {
    console.log(this.cartItemsArr);
    this.cartItemPrice=this.cartItemsArr.map((each:any)=>Number(`${each.price}`))
    console.log(this.cartItemPrice);

  }
  ngDoCheck(): void {

    this.totalprice=this.cartItemPrice.reduce((x:number,y:number)=>(
     x+y
    ),0)
  }
  removeItem(item:number){
    // this.cartService.removeCartItem(item)
    this.cartItemsArr.splice(item,1)
    console.log(this.cartItemsArr);
    this.cartItemPrice.splice(item,1)
    console.log(this.cartItemPrice);
  }
  emptycart(){
    this.cartService.removeAll()
  }
  Increase(item:any,index:number){
    if(item.quantity!=5){
      item.quantity+=1
      // console.log(item);
      this.cartItemPrice[index]=item.price*item.quantity
      // console.log(this.cartItemPrice);
    }
  }
  Decrease(item:any,index:number){
    // item.quantity = item.quantity -1
    if(item.quantity !=1){
      item.quantity -=1
      this.cartItemPrice[index]=item.price*item.quantity
      // console.log(this.cartItemPrice);
    }
  }
  payment(costs:number){
    this.cartService.paymentTotalCost(costs)

  }


}
