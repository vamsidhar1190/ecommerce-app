import { Component,OnInit,DoCheck } from '@angular/core';
import { CartService } from './cart.service';
import { ImageCroppedEvent, ImageCropperModule ,LoadedImage} from 'ngx-image-cropper';
import { NgToastService } from 'ng-angular-popup';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, } from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [NgbModalConfig, NgbModal],

})
export class AppComponent implements OnInit,DoCheck{

  title = 'commerceapp';
  lscart:any
  lsCartData:any
  showdetails:boolean=true
  dontshowdetails:boolean=false
  loginValue:any
  login:any
  searchTerm:any=' '
  imageChangeEvt:any =" ";
  CropImgPreview:any= " ";
  image:any;
  hide:boolean =false
  Details: string | null | undefined;
  cartItem :number=100
  googleauthtication:any
  googlearray:any





  cartquantity:number=0
  priceArr: any

  ngOnInit(): void {
  this.lscart=localStorage.getItem('cartItems')
  this.lsCartData=JSON.parse(this.lscart)
  }
  constructor (private CartService :CartService, private toast: NgToastService,config: NgbModalConfig,
     private modalService: NgbModal) {
    config.backdrop = 'static';
		config.keyboard = false;



  }

    //header cart



  ngDoCheck(): void {
    this.loginValue=sessionStorage.getItem('loginvalue')
    this.googleauthtication=localStorage.getItem('GoogleAuth')
    this.googlearray=JSON.parse(this.googleauthtication)
    this.login=JSON.parse(this.loginValue)
    if(this.login || this.googlearray){
      this.showdetails=false
      this.dontshowdetails=true
    }
    else{
      this.showdetails=true
      this.dontshowdetails=false
    }
   this.cartquantity= (this.CartService.priceArr).length
   console.log(this.cartquantity);

  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value
    console.log(this.searchTerm);
    this.CartService.search.next(this.searchTerm);

  }

// Image crop and save

imageChangedEvent: any = '';
cropImgPreview: any = '../assets/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
fileChangeEvent(event: any): void {
  this.imageChangedEvent = event;

}
imageCropped(event: ImageCroppedEvent) {
  this.cropImgPreview = event.base64;
  console.log(event.base64);
}
imageLoaded() {
  // show cropper
}
cropperReady() {
  // cropper ready
}
loadImageFailed() {
  // show message
}
ProfileImg(proPic:any){
this.modalService.open(proPic)
}ismenuOpened:boolean=false;

togglemenu(){
  this.ismenuOpened=!this.ismenuOpened
}
clickedOutside():void{
  this.ismenuOpened=false
}
detailsPopUp(){
  console.log("hhhhhhhhh");
}

}




