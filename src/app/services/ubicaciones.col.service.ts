import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UbicacionCol } from '../models/ubicaciones-col';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesColService {
  //consume la api y necera un arreglo con la interfas ubicaciones
  private apiUrl = 'https://localhost:44343/api/DtosMunicipios';
  constructor(private http: HttpClient) { }

  obtenerUbicaciones(): Observable<UbicacionCol[]> {
    return this.http.get<UbicacionCol[]>(this.apiUrl);
  }
}