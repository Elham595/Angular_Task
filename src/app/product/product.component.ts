import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../product-list.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  element:any={};
  constructor(_ProductListService:ProductListService) {
    // _ProductListService.getElement().subscribe(
    //   (data: any)=>this.element=data
    // )
   }
   
  ngOnInit(): void {
  }

}
