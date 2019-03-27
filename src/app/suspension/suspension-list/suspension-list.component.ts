import { Component, OnInit } from '@angular/core';
import {Suspension} from "../suspension";
import {SuspensionService} from "../suspension.service";

@Component({
  selector: 'app-suspension-list',
  templateUrl: './suspension-list.component.html',
  styleUrls: ['./suspension-list.component.css']
})
export class SuspensionListComponent implements OnInit {

constructor(private suspensionService:SuspensionService) { }

suspensiones: Suspension[];

getSuspensiones(): void{
this.suspensionService.getSuspensiones().subscribe(susp => this.suspensiones = susp);
}

ngOnInit() {
  this.getSuspensiones();
}


}