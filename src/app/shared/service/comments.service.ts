import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Coment } from '../interface/coment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  items: Observable<any>;
  newComment: Coment;

  constructor(private AngularFireDatabase: AngularFireDatabase) {
    this.items = this.AngularFireDatabase.list('/Comment').valueChanges();
  }

  getComments(): Observable<any> {
    return this.items;
  }

}
