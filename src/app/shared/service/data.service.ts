import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Observable<any>;
  newProduct: Product;
  constructor( private AngularFireDatabase: AngularFireDatabase ) {
    this.items = this.AngularFireDatabase.list('/Products').valueChanges()
   }
  addProduct (newProduct: Product) {
    console.log(newProduct);
    this.newProduct = newProduct;  
  }
  getGoods(): any{
    return  this.items
  }


}
