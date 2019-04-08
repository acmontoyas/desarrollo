import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacionycomentario} from './calificacionycomentario';
import { Observable } from 'rxjs';

const API_URL="../../assets/";
const calificacionesycomentarios = "calificacionesycomentarios.json";


@Injectable()
export class CalificacionycomentarioService {

  constructor(private http: HttpClient) { }

getCalificacionesycomentarios(): Observable<Calificacionycomentario[]>{
  return this.http.get<Calificacionycomentario[]>(API_URL + calificacionesycomentarios);
}

}