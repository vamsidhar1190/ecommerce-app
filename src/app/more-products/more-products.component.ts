import { Component, OnInit,DoCheck } from '@angular/core';
// import { Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { CartService } from './../cart.service';
import { ApiService } from './../api.service';
import { NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-more-products',
  templateUrl: './more-products.component.html',
  styleUrls: ['./more-products.component.css'],
  providers: [NgbCarouselModule]

})


export class MoreProductsComponent implements OnInit, DoCheck{

	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  lsData:any=[]
  ProductData:any=[]
  lsObj:any={}
  getdata:any=[]
  Product_Details: any=[];
  newdata:any=[]
  carouselImgs:any=[]

  myLsData:any=[]

  imagearray:any=[]
  testform:FormGroup
  constructor(private api:ApiService, private cartservice: CartService,private mypopup:NgbModal,private fb:FormBuilder){

    this.getdata=localStorage.getItem('Product_Details')
    this.myLsData=JSON.parse(this.getdata)
    this.testform= this.fb.group ({
      title:new FormControl(),
      quantity:new FormControl(),
      price:new FormControl(),
      category:new FormControl(),
      description:new FormControl(),
      image: this.fb.array([this.addurl()]),

    })

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
// adding new url

get addingNewInput(): FormArray {
  return <FormArray>this.testform.get('image')
}


addurl() {
  return this.fb.group({
    urls: new FormControl()
  })
}
forNewInput() {
  this.addingNewInput.push(this.addurl())
}
removingInput(index: number) {
  this.addingNewInput.removeAt(index)
}
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
    return<FormArray>this.testform.get('image')
  }


  addproduct(data:any){
// console.log(this.myLsData[0].image);

    console.log(this.price?.value);
    console.log(data.value);
    this.lsObj=data.value;
    this.ProductData.push(this.lsObj)
    localStorage.setItem('Product_Details',JSON.stringify(this.ProductData))
    this.testform.reset()
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
  this.testform.reset()
}
carouselImgsArr:any=[]
CarouselPopup(carousel:any,index:number){
  this.mypopup.open(carousel)
  console.log(index);
  console.log("the require obj", this.myLsData[index].image);

  this.carouselImgsArr=this.myLsData[index].image

// console.log(this.carouselImgsArr[0].urls);

}



}
