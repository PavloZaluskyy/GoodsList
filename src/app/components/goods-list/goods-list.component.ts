import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  items: any[] = [];
  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.getGoods()
      .subscribe( x => {
        x =  orderBy(x, 'name', 'asc');
        return this.items = x
      });   
  }
  onSort(event){
    let field = event.target.value;
    this.items = orderBy(this.items, field, 'asc');
  }

}
