import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
@Input() numberOfVotes: number;
@Output()
change: EventEmitter<number>= new EventEmitter<number>();
likeButtonClick(){
  this.numberOfVotes++;
  this.change.emit(this.numberOfVotes);
}
dislikeButtonClick(){
  this.numberOfVotes--;
  this.change.emit(this.numberOfVotes);
}
  constructor() { }

  ngOnInit() {
  }

}
