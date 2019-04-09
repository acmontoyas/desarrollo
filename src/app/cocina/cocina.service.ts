import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocina } from './cocina';
import {CocinaDetail} from './cocina-detail'
import { Observable } from 'rxjs';


const API_URL="../../assets/";
const cocinas = "cocinas.json";


@Injectable()
export class CocinaService {

  constructor(private http: HttpClient) { }

getCocinasDetail(): Observable<CocinaDetail[]>{
  return this.http.get<CocinaDetail[]>(API_URL + cocinas);
}


     getCocinaDetail(cocinaId:number): Observable<CocinaDetail> {
      return this.http.get<CocinaDetail>(API_URL +  "cocina" + cocinaId+".json");
    }




}
