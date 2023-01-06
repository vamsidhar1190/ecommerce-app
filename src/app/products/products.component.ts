import { CartService } from './../cart.service';
import { ApiService } from './../api.service';
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  public productList :any ;
  public cartArr:any=[]

  constructor (private api:ApiService, private cartservice: CartService) { }
ngOnInit(): void{
  this.api.getproduct().subscribe(res=>{
    this.productList=res;
    console.log(this.productList)
    this.productList.forEach((a:any)=>{
    Object.assign(a,{quantity:1,total:a.price})

    })
  })
}
addtocart(item:any){
  // this.cartservice.addtocart(item);
  this.cartArr.push(item)
  localStorage.setItem('cartItems',JSON.stringify(this.cartArr))


}

}
