import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  chooseProduct: Product;

  constructor() { }
}
