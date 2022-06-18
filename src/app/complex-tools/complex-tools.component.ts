import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../product-list.service'
@Component({
  selector: 'app-complex-tools',
  templateUrl: './complex-tools.component.html',
  styleUrls: ['./complex-tools.component.css']
})
export class ComplexToolsComponent implements OnInit {

  complex_products:any[]=[];
  constructor(_ProductListService:ProductListService) {
    _ProductListService.getProducts().subscribe(
      (response: any)=>this.complex_products=response.filter((item: { category: any; })=>item.category=='complex')
    )
   }

  ngOnInit(): void {
  }

}
