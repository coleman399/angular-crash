import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { Task } from 'src/app/mock-tasks/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
