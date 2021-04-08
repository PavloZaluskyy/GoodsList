import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';
import { DetailsService } from '../../shared/service/details.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteProduct = new EventEmitter<Product>();
  constructor( private detailsService: DetailsService ) { }
  chooseProduct(){
    this.detailsService.chooseProduct = this.product;
  }
  delete(increased:Product){
    this.deleteProduct.emit(increased);
  }
  ngOnInit(): void {
  }

}
