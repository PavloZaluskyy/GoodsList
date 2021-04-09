import { Injectable } from '@angular/core';
import { Product } from '../interface/product'

@Injectable({
  providedIn: 'root'
})
export class EditProductService {

  chooseProduct: Product;

  constructor() { }
}
