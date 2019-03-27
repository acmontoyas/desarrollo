import { Component, OnInit } from '@angular/core';
import {Cocina} from "../cocina";
import {CocinaService} from "../cocina.service";

@Component({
  selector: 'app-cocina-list',
  templateUrl: './cocina-list.component.html',
  styleUrls: ['./cocina-list.component.css']
})
export class CocinaListComponent implements OnInit {

constructor(private cocinaService:CocinaService) { }

cocinas: Cocina[];

getCocinas(): void{
this.cocinaService.getCocinas().subscribe(c => this.cocinas = c);
}

  ngOnInit() {
    this.getCocinas;
  }


}