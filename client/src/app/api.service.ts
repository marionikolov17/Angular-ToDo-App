import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private tasks: any[] = [
    {
      id: 1,
      text: "Some task 1",
      dueDate: "25th Mar 2024",
      createdAt: "17th Mar 2024"
    },
    {
      id: 2,
      text: "Some task 2",
      dueDate: "25th Jun 2024",
      createdAt: "17th Apr 2024"
    },
  ]

  constructor() { }

  public getTasks() : any {
    return this.tasks;
  }

  public createTask() : void {

  }

  public updateTask() : void {

  }

  public removeTask() : void {

  }
}
