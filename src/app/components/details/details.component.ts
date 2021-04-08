import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';
import { DetailsService } from '../../shared/service/details.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product:Product;

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.product = this.detailsService.chooseProduct;
  }

}
