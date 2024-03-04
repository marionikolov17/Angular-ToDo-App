import { Component } from '@angular/core';
import { faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-options',
  templateUrl: './todo-options.component.html',
  styleUrls: ['./todo-options.component.css']
})
export class TodoOptionsComponent {
  faSortAmountUp=faSortAmountUp;
  faSortAmountDown=faSortAmountDown;
}
