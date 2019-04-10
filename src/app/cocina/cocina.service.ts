import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocina } from './cocina';
import { Observable } from 'rxjs';


const API_URL="../../assets/";
const cocinas = "cocinas.json";


@Injectable()
export class CocinaService {

  constructor(private http: HttpClient) { }

getCocinas(): Observable<Cocina[]>{
  return this.http.get<Cocina[]>(API_URL + cocinas);
}





}
