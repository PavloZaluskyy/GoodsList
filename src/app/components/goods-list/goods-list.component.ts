import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service';
import { orderBy } from 'lodash';
import { Product } from 'src/app/shared/interface/product';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  items: Product[] = [];

  constructor(private dataService: DataService) { }
  
  delete(product: Product) {
    this.items = this.items.filter(item => item.id !== product.id);
  }

  ngOnInit(): void {
    this.dataService.getGoods()
      .subscribe(x => {
        x = orderBy(x, 'name', 'asc');
        this.items = x;
        if (this.dataService.newProduct) {
          this.items.unshift(this.dataService.newProduct);
        }
        return this.items
      });
  }

  onSort(event) {
    let field = event.target.value;
    this.items = orderBy(this.items, field, 'asc');
  }

}
