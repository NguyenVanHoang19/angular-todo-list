import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent {
  title: string = "TO DO LIST";
  imageTitle: string = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
  newTask: string = '';
  tasks: string[] = [];

  addNewTask() {
    if(this.newTask.trim() !== "") {
      this.tasks.push(this.newTask);
      this.newTask = "";
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number, taskEdit: string) {
    const task = taskEdit.trim();
    if(task) {
      this.tasks[index] = task;
    }
  }
}
