import { Component } from '@angular/core';
import { CartService } from './../cart.service';
import { OnInit,DoCheck } from '@angular/core';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit,DoCheck {



  totalprice:number=0
  cartItemPrice: any;

constructor (private CostsTotal:CartService) {

}

  ngOnInit(): void {
    this.totalprice=this.CostsTotal.totalcost
    console.log(this.totalprice);

  }


  ngDoCheck(): void {

  }
}




