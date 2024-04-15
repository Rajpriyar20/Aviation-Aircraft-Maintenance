import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftComponent } from "./aircraft/aircraft.component"
import { AircraftService } from './aircraft/aircraft.service';
import { HttpClientModule } from '@angular/common/http';
import {TaskService} from "./maintenance tasks/task.serivce"
import {TaskComponent} from "./maintenance tasks/task.component"
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AircraftComponent,
    TaskComponent,
    HomeComponent,
   // MaintenanceTaskPopupComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
    
  ],
  providers: [AircraftService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
