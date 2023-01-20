import { ProductsComponent } from './../products/products.component';
import { CartService } from './../cart.service';
import { Component,OnInit,DoCheck } from '@angular/core';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck{

  product: any=[]
  grandTotal:any=0
  totalItem: number =0
  cartItemsArr:any=[]
  total:any= []
  cartArr=[]
  cartItemPrice:any=[]
  totalprice:number=0

  // fonts

  constructor (private cartService:CartService) {
    this.cartItemsArr=this.cartService.priceArr;

  }

  ngOnInit(): void {
    // // this.cartService.getProducts().subscribe(res=>{
    // //   this.product =res;
    // //   console.log(this.product);

    // //   this.grandTotal=this.cartService.getTotalprice()
    // // })
    // this.lsJson=localStorage.getItem('cartItems')
    // this.cartItemsArr=JSON.parse(this.lsJson)

    console.log(this.cartItemsArr);

    // this.totalcart();
    // this.cartArr=this.cartService.cartItemList
    // console.log(this.cartArr);
    this.cartItemPrice=this.cartItemsArr.map((each:any)=>Number(`${each.price}`))
    console.log(this.cartItemPrice);

  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

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


    // this.newlsdata=JSON.stringify(this.cartItemsArr)
    // localStorage.setItem('cartItems',this.newlsdata)
    // this.totalprice=this.cartItemPrice.splice(item)
  }
  emptycart(){
    this.cartService.removeAll()
    // console.log(this.emptycart);

  }

  Increase(item:any,index:number){


    // console.log(item.quantity);
    // item.quantity = item.quantity +1
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
  totalcart(){
  }
}
