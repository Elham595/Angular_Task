import { Component } from '@angular/core';
import {ProductListService} from './product-list.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Task';
  
  products:any[]=[];
  simple_products:any[]=[];
  complex_products:any[]=[];
  constructor(_ProductListService:ProductListService)
  {
    /**********************saving the data in products array**********************/
    _ProductListService.getProducts().subscribe(
      (response: any)=>this.products=response
    )
    /****************saving the data according to catogory in simple and complex array****************/
    _ProductListService.getProducts().subscribe(
      (response: any)=>this.simple_products=response.filter((item: { category: any; })=>item.category=='simple')
    )
    _ProductListService.getProducts().subscribe(
      (response: any)=>this.complex_products=response.filter((item: { category: any; })=>item.category=='complex')
    )
  }
}
