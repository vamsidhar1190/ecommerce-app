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
  searchkey:string=" ";
  cartItem:any={}
  filtercategory:any


  constructor (private api:ApiService, private cartservice: CartService) { }
ngOnInit(): void{
  this.api.getproduct().subscribe(res=>{
    this.productList=res;
    console.log(this.productList)
    this.filtercategory=res;
    this.productList.forEach((a:any)=>{
      if( a.category==="men's clothing"|| a.category=== "women's clothing"){
        a.category="fashion"
      }
    Object.assign(a,{quantity:1,total:a.price})

    });
    console.log(this.productList);

  })
  this.cartservice.search.subscribe((val:any)=>{
    this.searchkey=val
  })
}
addtocart(item:any,index:number){
  // this.cartservice.addtocart(item);
  this.cartservice.addtocartAll(item)
  console.log(this.productList[index]);
  this.cartItem=this.productList[index]
  this.cartservice.addtocart(this.cartItem)
}
filter(category:string){
  this.filtercategory=this.productList
  .filter((a:any)=>{
    if(a.category ==category || category == "" ){
      return a;
    }
  })
}

}
