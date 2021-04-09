import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coment } from '../../shared/interface/coment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Output() deleteComment = new EventEmitter<Coment>();
  @Input() comment: Coment;

  constructor() { }

  delete(increased: Coment) {
    this.deleteComment.emit(increased);
  }
  
  ngOnInit(): void {
  }

}
