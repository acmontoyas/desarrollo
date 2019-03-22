import { Component, OnInit } from '@angular/core';
import {Cocina} from "./cocina";

@Component({
  selector: 'app-cocina-list',
  templateUrl: './cocina-list.component.html',
  styleUrls: ['./cocina-list.component.css']
})
export class CocinaListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

cocinas: Cocina[] = [new Cocina (1,"aquí"),new Cocina(2,"allá"),
new Cocina(3,"por acá")];


}