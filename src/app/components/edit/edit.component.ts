import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';
import { EditProductService } from '../../shared/service/edit-product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  product: Product;
  constructor( private editProductService: EditProductService ) { }

  ngOnInit(): void {
    this.product = this.editProductService.chooseProduct; 
  }

}
