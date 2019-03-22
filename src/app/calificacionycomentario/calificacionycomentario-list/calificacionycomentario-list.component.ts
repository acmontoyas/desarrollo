import { Component, OnInit } from '@angular/core';
import {Calificacionycomentario} from "./calificacionycomentario";

@Component({
  selector: 'app-calificacionycomentario-list',
  templateUrl: './calificacionycomentario-list.component.html',
  styleUrls: ['./calificacionycomentario-list.component.css']
})
export class CalificacionycomentarioListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

calificacionesycomentarios: Calificacionycomentario[] = [
new Calificacionycomentario (1,5,"bien"),
new Calificacionycomentario(2,1,"mal")];

}