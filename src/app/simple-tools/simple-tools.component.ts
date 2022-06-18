import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../product-list.service'
@Component({
  selector: 'app-simple-tools',
  templateUrl: './simple-tools.component.html',
  styleUrls: ['./simple-tools.component.css']
})
export class SimpleToolsComponent implements OnInit {

  simple_products:any[]=[];
  constructor(_ProductListService:ProductListService) { 
    _ProductListService.getProducts().subscribe(
      (response: any)=>this.simple_products=response.filter((item: { category: any; })=>item.category=='simple')
    )
  }

  ngOnInit(): void {
  }

}
