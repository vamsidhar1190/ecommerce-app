import { Component, OnInit,DoCheck } from '@angular/core';
// import { Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './../cart.service';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-more-products',
  templateUrl: './more-products.component.html',
  styleUrls: ['./more-products.component.css']

})


export class MoreProductsComponent implements OnInit, DoCheck{



  lsData:any=[]
  ProductData:any=[]
  lsObj:any={}
  getdata:any=[]
  Product_Details: any=[];
  newdata:any=[]


  myLsData:any=[]
  constructor(private api:ApiService, private cartservice: CartService){

    this.getdata=localStorage.getItem('Product_Details')
    this.myLsData=JSON.parse(this.getdata)


    console.log(this.myLsData);
  }

  ngOnInit(): void {
    // console.log('ng onoit vamsi');

    this.lsData=localStorage.getItem('Product_Details')

  }
ngDoCheck(): void {


  this.getdata=localStorage.getItem('Product_Details')
  this.myLsData=JSON.parse(this.getdata)
}


  testform= new FormGroup ({
    title:new FormControl(),
    quantity:new FormControl(),
    price:new FormControl(),
    category:new FormControl(),
    description:new FormControl(),
    image:new FormControl()
  })
  get title() {
    return this.testform.get('title')
  }
  get quantity() {
    return this.testform.get('quantity')
  }
  get price() {
    return this.testform.get('price')
  }
  get category() {
    return this.testform.get('category')
  }
  get description() {
    return this.testform.get('description')
  }
  get image(){
    return this.testform.get('image')
  }


  addproduct(data:any){
    // let newprod={
    //   category:
    //   description:
    //   image:
    //   price:
    //   title:
    //   total:
    // }
    console.log(this.price?.value);
    console.log(data.value);
    this.lsObj=data.value;
    this.ProductData.push(this.lsObj)
    localStorage.setItem('Product_Details',JSON.stringify(this.ProductData))
}
removeitem(index:number){
  console.log(this.myLsData[index]);

  this.myLsData.splice(index,1)
  localStorage.setItem('Product_Details',JSON.stringify(this.myLsData))

}

addtocart(pro:any,index:number){
  // this.cartservice.addtocart(item);
  this.cartservice.addtocartAll(pro)
  console.log(this.myLsData[index]);
  this.Product_Details=this.myLsData[index]
  this.cartservice.addtocart(this.Product_Details)
}


}
