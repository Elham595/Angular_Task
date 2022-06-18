import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private _HttpClient:HttpClient) { 

  }
  getProducts():Observable<any>
  {
    return this._HttpClient.get(`https://captello.firebaseio.com/products.json`);
  }
}
