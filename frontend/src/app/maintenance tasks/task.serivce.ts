import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MaintenanceTask} from "../model/maintenanceTask"

@Injectable({
    providedIn: 'root'
})

export class TaskService{
    
    private apiUrl = "http://localhost:9000/tasks";

    aircraftList = [];

    constructor(private http: HttpClient){}

    getAircraftDetails(): Observable<MaintenanceTask[]>{
        return this.http.get<MaintenanceTask[]>(this.apiUrl);
    }

    createAircraft(aircraft: MaintenanceTask): Observable<MaintenanceTask>{
        return this.http.post<MaintenanceTask>(this.apiUrl, aircraft);
    }

    getTaskDetailsByAircraftId(aircraftId: number): Observable<MaintenanceTask[]> {
        return this.http.get<MaintenanceTask[]>(`${this.apiUrl}?aircraftId=${aircraftId}`);
    }
}