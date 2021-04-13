import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coment } from '../interface/coment';
import { map } from 'rxjs/operators';

interface CreateResponse {
  name: string
}

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

  addComment(comment: Coment): Observable<Coment> {
    this.newComment = comment;
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(comment);
    return this.http.post<CreateResponse>(`${CommentsService._url}.json`, body, { 'headers': headers })
      .pipe(
        map(item => {
          return { ...comment, id: item.name }
        })
      )
  }

  putComment(comment: Coment): Observable<Coment> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    const body = JSON.stringify(comment);
    return this.http.put<Coment>(`${CommentsService._url}/${comment.id}.json`, body, { 'headers': headers })
  }


}
