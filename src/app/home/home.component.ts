import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../product-list.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any[]=[];
  constructor(_ProductListService:ProductListService) {
    _ProductListService.getProducts().subscribe(
      (response: any)=>this.products=response
    )
   }
  
  ngOnInit(): void {
  }

}
