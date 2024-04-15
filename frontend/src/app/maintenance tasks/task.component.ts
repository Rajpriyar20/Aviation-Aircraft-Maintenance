import { Component, OnInit } from "@angular/core";
import { TaskService } from "./task.serivce";
import { MaintenanceTask } from "../model/maintenanceTask";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  taskList: MaintenanceTask[] = [];
  filteredTaskList: MaintenanceTask[] = [];
  searchId: number | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAircraftDetails().subscribe((tasks) => {
      this.taskList = tasks;
      this.filteredTaskList = tasks;
    });
  }

  search() {
    console.log(this.searchId);
    if (!this.searchId) {
      this.loadTasks();
    } else {
      const searchIdNumber = +this.searchId;
      this.filteredTaskList = this.taskList.filter(
        (task) => task.id === searchIdNumber
      );
      console.log(this.filteredTaskList);
    }
  }
}
