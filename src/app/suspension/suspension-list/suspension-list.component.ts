import { Component, OnInit } from '@angular/core';
import {Suspension} from "./suspension";

@Component({
  selector: 'app-suspension-list',
  templateUrl: './suspension-list.component.html',
  styleUrls: ['./suspension-list.component.css']
})
export class SuspensionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
suspensiones: Suspension[] = [new Suspension(1,true,"x",5), new Suspension(2,false, "y",3)];


}