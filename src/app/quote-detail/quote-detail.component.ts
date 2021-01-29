import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  faThumbsUp=faThumbsUp;
  faThumbsDown=faThumbsDown;
  @Input() quote: Quote;
  @Output() thisUpvote=new EventEmitter<number>();

  upvotePlus(){
    this.quote.upvotes=this.quote.upvotes+1;
    this.thisUpvote.emit(this.quote.upvotes);
  }

  downvotePlus(){
    this.quote.downvotes=this.quote.downvotes+1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
