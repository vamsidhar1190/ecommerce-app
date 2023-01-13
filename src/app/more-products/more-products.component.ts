import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-more-products',
  templateUrl: './more-products.component.html',
  styleUrls: ['./more-products.component.css']
})
export class MoreProductsComponent implements OnInit {


  ngOnInit(): void {

  }

  submit(data:Object){
    console.log(data);

  }
}
