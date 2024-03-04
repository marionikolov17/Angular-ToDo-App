import { Component } from '@angular/core';
import { faCalendar, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  faCalendar=faCalendar;
  faCalendarTimes=faCalendarTimes
}
