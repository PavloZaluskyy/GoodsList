import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';
import { DetailsService } from '../../shared/service/details.service';
import { CommentsService } from '../../shared/service/comments.service';
import { orderBy } from 'lodash';
import { Coment } from '../../shared/interface/coment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: Product;
  comments: Coment[] = [];
  newMessage: string = '';
  isCommentField: boolean = false;

  constructor(private detailsService: DetailsService, private commentsService: CommentsService) { }

  delete(comment: Coment) {
   this.commentsService.delete(comment)
    .subscribe(
      ()=> {this.comments = this.comments.filter(com => com.id !== comment.id),
      err => console.error(err.message)}
    )
  }

  addComment() {
    if (!this.newMessage.trim()) {
      this.isCommentField = true;
      return false
    }
    const newComment = {
      productId: this.product.id,
      description: this.newMessage,
      date: new Date().getTime()
    }
    this.commentsService.addComment(newComment)
      .subscribe(
        item => {
          this.comments.unshift(item);
          this.newMessage = '';
          this.commentsService.putComment(item)
            .subscribe(
              item => item,
              err => console.error(err.message)
            )
        },
        err => console.error(err.message)
      )
  }

  ngOnInit(): void {
    this.product = this.detailsService.chooseProduct;
    this.commentsService.getComments()
      .subscribe(comments => {
        comments = orderBy(comments, 'date', 'desc');
        comments = comments.filter(item => item);
        comments = comments.filter(comment => comment.productId === this.product.id);    
        comments = orderBy(comments, 'date', 'desc');
        this.comments = comments;
      })
  }

}
