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
    this.comments = this.comments.filter(com => com.id !== comment.id)
  }

  addComment() {
    if (!this.newMessage.trim()) {
      this.isCommentField = true;
      return false
    }
    const newComment = {
      id: new Date().getTime(),
      productId: this.product.id,
      description: this.newMessage,
      date: new Date().getTime()
    }
    this.comments.unshift(newComment)
    return this.newMessage;
  }

  ngOnInit(): void {
    this.product = this.detailsService.chooseProduct;
    this.commentsService.getComments()
      .subscribe(x => {
        x = x.filter(comment => comment.productId === this.product.id);
        x = orderBy(x, 'date', 'asc');
        this.comments = x;
      })
  }

}
