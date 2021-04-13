import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from '../interface/product';
import {map} from 'rxjs/operators';

interface CreateResponse {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Observable<any>;
  newProduct: Product;
  
  static _url = 'https://inforcegoodslist-default-rtdb.firebaseio.com/Products';

  constructor( private http: HttpClient) {}

  addGoods(product: Product):Observable<Product>{
    this.newProduct = product;
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(product);
    return this.http.post<CreateResponse>(`${DataService._url}.json`, body, {'headers': headers})
    .pipe(
      map( item => {
        return {...product, id: item.name}
      })
    )
  }

  putGoods(product: Product): Observable<Product>{
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    const body=JSON.stringify(product);
    return this.http.put<Product>(`${DataService._url}/${product.id}.json`, body, {'headers': headers})
  }

  delete(product: Product): Observable<void>{
    return this.http.delete<void>(`${DataService._url}/${product.id}.json`)
  }

  getProducts(): Observable<any>{
    return this.http.get(`${DataService._url}.json`)
  }

}
