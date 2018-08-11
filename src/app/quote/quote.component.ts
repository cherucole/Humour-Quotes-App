import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes=[
new Quote("cherucole", "this is a test quote"),
new Quote("cherucole", "this is a test quote"),
new Quote("cherucole", "this is a test quote"),

]
  // quote: Quote={
  //   name: "cherucole"
  //   quote: "This is a test quote"
  // };

    constructor() { }

    ngOnInit() {
    }

  }
