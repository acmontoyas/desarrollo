import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suspension } from './suspension';
import {SuspensionDetail} from './suspension-detail'
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const suspensiones = "suspensiones.json";


@Injectable()
export class SuspensionService {

  constructor(private http: HttpClient) { }



 getSuspensionesDetail():Observable<SuspensionDetail[]>{
    return this.http.get<SuspensionDetail[]>(API_URL+suspensiones);
  }

     getSuspensionDetail(suspensionId:number): Observable<SuspensionDetail> {
      return this.http.get<SuspensionDetail>(API_URL +  "suspension" + suspensionId+".json");
    }

}


