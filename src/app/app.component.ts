import { Component } from '@angular/core';
import {Quote} from './quote'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quote: Quote={
  name: 'cherucole',
  quote: 'This is a test quote'
};
  title = 'my Humour App';
}
