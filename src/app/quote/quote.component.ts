import { Component, Input, Output, EventEmitter } from '@angular/core';
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

    constructor() {
    }
onRemoveQuoteClick = function(){

}
  }
