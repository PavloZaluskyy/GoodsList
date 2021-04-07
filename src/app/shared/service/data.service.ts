import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Observable<any>
  constructor( private AngularFireDatabase: AngularFireDatabase ) {
    this.items = this.AngularFireDatabase.list('/Products').valueChanges()
   }
  
  getGoods(): any{
    return  this.items
  }


}
