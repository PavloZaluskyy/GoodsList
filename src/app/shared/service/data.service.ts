import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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

  constructor(private AngularFireDatabase: AngularFireDatabase,
              private http: HttpClient) {
    this.items = this.AngularFireDatabase.list('/Products').valueChanges();
  }



  getGoods(): Observable<any> {
    return this.items
  }


  addGoods(product: Product):any{
    this.newProduct = product;
    return this.http.post(`${DataService._url}.json`, product)
    .pipe(
      map( item => {
        return {...product, item }
      })
    )
  }
  getProducts(): any{
    return this.http.get(`${DataService._url}.json`)
  }

}
