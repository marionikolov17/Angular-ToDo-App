import { Component } from '@angular/core';
import { faCheckSquare, faHourglass, faInfoCircle, faPencilAlt, faSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  /* Icons */
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  faPencil = faPencilAlt;
  faTrash = faTrash;
  faInfoCircle = faInfoCircle;
  faHourglass = faHourglass
}
