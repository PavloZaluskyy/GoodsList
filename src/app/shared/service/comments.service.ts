import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coment } from '../interface/coment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  items: Observable<any>;
  newComment: Coment;

  static _url = 'https://inforcegoodslist-default-rtdb.firebaseio.com/Comment';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get(`${CommentsService._url}.json`)
  }

  delete(comment: Coment): Observable<void> {
    return this.http.delete<void>(`${CommentsService._url}/${comment.id}.json`)
  }

}
