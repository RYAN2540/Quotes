import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { Upvotes } from '../upvotes';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-qoutes-home',
  templateUrl: './qoutes-home.component.html',
  styleUrls: ['./qoutes-home.component.css']
})
export class QoutesHomeComponent implements OnInit {
  faTrash=faTrash;
  quotes: Quote[]=[];
  upvotesObj: Upvotes=new Upvotes();  

  addNewQuote(newQuote:Quote){
    newQuote.date=new Date(newQuote.date);
    this.quotes.unshift(newQuote);
  }

  deleteQuote(index:number){
    var toDelete:boolean=confirm("Delete quote?");
    if(toDelete){
      this.quotes.splice(index,1);
    }
  }

  updateVotes(votes){    
    this.upvotesObj.upvotesArray.push(votes);
    let maxVotes=Math.max(...this.upvotesObj.upvotesArray);
    this.upvotesObj.maxUpvotes=maxVotes;    
  }

  toShow(i){
    this.quotes[i].showDescription=true;
  }

  toHide(i){
    this.quotes[i].showDescription=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
