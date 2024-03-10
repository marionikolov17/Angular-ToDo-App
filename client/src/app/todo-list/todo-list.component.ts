import { Component, OnInit } from '@angular/core';
import {
  faCheckSquare,
  faHourglass,
  faInfoCircle,
  faPencilAlt,
  faSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';
import { ToDo } from '../types/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  /* Icons */
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  faPencil = faPencilAlt;
  faTrash = faTrash;
  faInfoCircle = faInfoCircle;
  faHourglass = faHourglass;
  tasks: ToDo[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.tasks = this.apiService.getTasks();
    console.log(this.tasks);
  }
}
