import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AircraftComponent} from "./aircraft.component";
import {HttpClient} from "@angular/common/http";
import {Aircraft} from "../model/aircraft";
import {MaintenanceTask} from "../model/maintenanceTask"

@Injectable({
    providedIn: 'root'
})

export class AircraftService{
    
    private apiUrl = "http://localhost:9000/aircrafts";

    aircraftList = [];

    constructor(private http: HttpClient){}

    getAircraftDetails(): Observable<Aircraft[]>{
        return this.http.get<Aircraft[]>(this.apiUrl);
    }

    createAircraft(aircraft: Aircraft): Observable<Aircraft>{
        return this.http.post<Aircraft>(this.apiUrl, aircraft);
    }


  

}