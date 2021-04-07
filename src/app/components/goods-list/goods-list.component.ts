import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service';


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
        
        return this.items = x
      });   
  }
 

}
