import { Component, OnInit } from '@angular/core';
import {Calificacionycomentario} from "./calificacionycomentario";
import {CalificacionycomentarioService } from "../calificacionycomentario.service";

@Component({
  selector: 'app-calificacionycomentario-list',
  templateUrl: './calificacionycomentario-list.component.html',
  styleUrls: ['./calificacionycomentario-list.component.css']
})
export class CalificacionycomentarioListComponent implements OnInit {

 constructor(private calificacionycomentarioService:CalificacionycomentarioService) { }

 calificacionesycomentarios: Calificacionycomentario[];

getCalificacionesycomentarios(): void{
this.calificacionycomentarioService.getCalificacionesycomentarios().subscribe(c => this.calificacionesycomentarios = c);
}

ngOnInit() {
this.getCalificacionesycomentarios;
}


}