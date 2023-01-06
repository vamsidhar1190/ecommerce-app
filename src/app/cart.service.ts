import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList:any=[]
  productList = new BehaviorSubject<any>([]);


  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
   this.cartItemList.push(product);
    this.productList.next(product)
  }
  addtocart(product:any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalprice();
    console.log(this.cartItemList);

  }
  getTotalprice(){
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total
    })
  }
  removeCartItem(product :any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.spilce(index,1)
      }
    })
  }
  removeAll(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList)

  }

  mycart:any=[]

  addtocartAll(mydata:any){
    this.mycart.push(mydata)
  }




}
