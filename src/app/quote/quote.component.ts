import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes=[
new Quote("cherucole", "this is a test quote on angular project to be submitted by tomorrow", new Date(2018,3,14)),
// new Quote("cherucole", "this is a test quote"),
// new Quote("cherucole", "this is a test quote"),

]
  // quote: Quote={
  //   name: "cherucole"
  //   quote: "This is a test quote"
  // };

    constructor() { }

    ngOnInit() {
    }
    onSubmit(f: NgForm) {
      let quote = f.value.quote;
      let name = f.value.name;
      this.quotes.push({
        'name' : name,
        'quote' : quote
      })
    }
  }
