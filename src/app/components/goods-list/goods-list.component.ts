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
    this.dataService.delete(product)
      .subscribe(() => {
        this.items = this.items.filter(item => item.id !== product.id)
      },
      err => console.error(err.message))
  }

  ngOnInit(): void {
      this.dataService.getProducts().subscribe(
        data => {
          data = orderBy(data, 'name, asc');
          data = data.filter(item => item);
          this.items = orderBy(data, 'name, asc');
        
          if (this.dataService.newProduct) {          
            this.dataService.addGoods(this.dataService.newProduct)
              .subscribe( item => {
                this.items.unshift(item)
                this.dataService.putGoods(item)
                  .subscribe(
                    item => item,
                    err => console.error(err.message)
                    )
              },
                err => console.error(err.message)
              )
            
          }
        }
      )
  }

  onSort(event) {
    let field = event.target.value;
    this.items = orderBy(this.items, field, 'asc');
  }

}
