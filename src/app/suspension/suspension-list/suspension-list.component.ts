import { Component, OnInit } from '@angular/core';
import {Suspension} from "../suspension";
import {SuspensionService} from "../suspension.service";
import{SuspensionDetail} from '../suspension-detail'

@Component({
  selector: 'app-suspension-list',
  templateUrl: './suspension-list.component.html',
  styleUrls: ['./suspension-list.component.css']
})
export class SuspensionListComponent implements OnInit {

constructor(private suspensionService:SuspensionService) { }

suspensiones: SuspensionDetail[];

getSuspensionesDetail(): void{
this.suspensionService.getSuspensionesDetail().subscribe(susp => this.suspensiones = susp);
}

ngOnInit() {
  this.getSuspensionesDetail();
}

}