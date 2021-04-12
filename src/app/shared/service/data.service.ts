import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Product } from '../interface/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Observable<any>;
  newProduct: Product;

  static _url = 'https://inforcegoodslist-default-rtdb.firebaseio.com/Products';

  constructor(private http: HttpClient) {}

  addGoods(product: Product):Observable<Product>{
    this.newProduct = product;
    return this.http.post(`${DataService._url}.json`, product)
    .pipe(
      map( item => {
        return {...product, item }
      })
    )
  }

  delete(product: Product): any{
    return this.http.delete<void>(`${DataService._url}/${product.id}.json`)
  }
  getProducts(): Observable<any>{
    return this.http.get(`${DataService._url}.json`)
  }

}
