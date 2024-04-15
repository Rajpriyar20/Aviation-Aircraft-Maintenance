import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AircraftComponent } from './aircraft/aircraft.component';
import { HomeComponent } from './home/home.component';

import { TaskComponent } from './maintenance tasks/task.component';


const routes: Routes = [
  { path: "tasks", component: TaskComponent },
  { path: "aircrafts", component: AircraftComponent },
 { path: "", redirectTo: "home", pathMatch: "full" },
 {path: "home", component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
