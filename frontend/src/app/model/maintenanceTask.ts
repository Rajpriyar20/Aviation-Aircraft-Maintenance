import { Aircraft } from "./aircraft";

export class MaintenanceTask extends Aircraft{
     id: number;
     dueDate: Date;
     completedDate: Date;
     description: string;
     aircraft: Aircraft;
}