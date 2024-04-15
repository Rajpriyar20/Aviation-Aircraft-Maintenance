import { Component, OnInit } from "@angular/core";
import { AircraftService } from "./aircraft.service";
import { TaskService } from "../maintenance tasks/task.serivce";
import { Aircraft } from "../model/aircraft";
import { MaintenanceTask } from "../model/maintenanceTask";

@Component({
    selector: 'app-aircraft',
    templateUrl: './aircraft.component.html',
    styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {
    aircraftList: Aircraft[] = [];
    filteredAircrafts: Aircraft[] = [];
    filterType: string = 'id';
    filterValue: string = '';
    showInput: boolean = true;

    constructor(private aircraftService: AircraftService, private taskService: TaskService) { }

    ngOnInit() {
        this.loadAircrafts();
    }

    loadAircrafts() {
        this.aircraftService.getAircraftDetails().subscribe(aircrafts => {
            this.aircraftList = aircrafts;
            this.filteredAircrafts = aircrafts;
        });
    }

    applyFilter() {
        if (this.filterValue.trim() === '') {
            this.filteredAircrafts = this.aircraftList;
        } else {
            this.filteredAircrafts = this.aircraftList.filter(aircraft => {
                if (this.filterType === 'id') {
                    return aircraft.id.toString() === this.filterValue.trim();
                } else if (this.filterType === 'name') {
                    return aircraft.name.toLowerCase().includes(this.filterValue.trim().toLowerCase());
                } else if (this.filterType === 'serialNumber') {
                    return aircraft.serialNumber.toString() === this.filterValue.trim();
                } else if (this.filterType === 'manufacturer') {
                    return aircraft.manufacturer.toLowerCase().includes(this.filterValue.trim().toLowerCase());
                }
            });
        }
    }

    onFilterChange() {
        if (this.filterType === 'id' || this.filterType === 'name' || this.filterType === 'serialNumber' || this.filterType === 'manufacturer') {
            this.showInput = true;
        } else {
            this.showInput = false;
        }
        this.filterValue = '';
    }

    showTaskDetails(aircraftId: number) {
        this.taskService.getTaskDetailsByAircraftId(aircraftId).subscribe(tasks => {
            const matchingTasks = tasks.filter(task => task.aircraft.id === aircraftId);
            if (matchingTasks.length > 0) {
                let taskDetails = "Maintenance Task Details:";
                matchingTasks.forEach(task => {
                    taskDetails += `
                        ID: ${task.id}
                        Description: ${task.description}
                        Due Date: ${task.dueDate}
                        Completed Date: ${task.completedDate}
                    `;
                });
                alert(taskDetails);
            } else {
                alert('No maintenance task details found for this aircraft.');
            }
        });
    }
    
}
