import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-more-products',
  templateUrl: './more-products.component.html',
  styleUrls: ['./more-products.component.css']
})
export class MoreProductsComponent implements OnInit {

  lsData:any=[]
  ProductData:any=[]
  lsObj:any={}
  getdata:any=[]
  Product_Details: any=[];
  newdata:any=[]
 

  myLsData:any=[]
  constructor(){
    this.getdata=localStorage.getItem('Product_Details')
    this.myLsData=JSON.parse(this.getdata)
    
    console.log(this.myLsData);
    this.myLsData.push(this.newdata)
    
    // if(this.getdata === null){
    //   this.Product_Details=[];
    // }else{
    //   this.Product_Details=JSON.parse(this.getdata)
    // }
    // return this.Product_Details
  }
  
  ngOnInit(): void {

    // this.lsData=localStorage.getItem('Product_Details')
    // console.log(this.lsData); 
    this.lsData=localStorage.getItem('Product_Details')    

  }

  testform= new FormGroup ({
    pName:new FormControl(),
    pPrice:new FormControl(),
    pColor:new FormControl(),
    pCategory:new FormControl(),
    pDescription:new FormControl(),
    pImage:new FormControl()
  })
  get pName() {
    return this.testform.get('pName')
  }
  get pPrice() {
    return this.testform.get('pPrice')
  }
  get pColor() {
    return this.testform.get('pColor')
  }
  get pCategory() {
    return this.testform.get('pCategory')
  }
  get pImage() {
    return this.testform.get('pName')
  }
  

  submit(data:any){
    // console.log(data);
    console.log(data.value);
    this.lsObj=data.value;
    this.ProductData.push(this.lsObj)
    localStorage.setItem('Product_Details',JSON.stringify(this.ProductData))
    // window.location.reload()

  }

}