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
  lsJson:any
  newlsdata:any
  constructor (private cartService:CartService) { }

  ngOnInit(): void {
    // this.cartService.getProducts().subscribe(res=>{
    //   this.product =res;
    //   console.log(this.product);

    //   this.grandTotal=this.cartService.getTotalprice()
    // })
    this.lsJson=localStorage.getItem('cartItems')
    this.cartItemsArr=JSON.parse(this.lsJson)

  }
  removeItem(item:number){
    // this.cartService.removeCartItem(item)
    this.cartItemsArr.splice(item,1)
    this.newlsdata=JSON.stringify(this.cartItemsArr)
    localStorage.setItem('cartItems',this.newlsdata)
  }
  emptycart(){
    this.cartService.removeAll()
  }



}
