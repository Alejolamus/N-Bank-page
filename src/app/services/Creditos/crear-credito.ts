import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newCredataData } from '../../models/Creditos/newCredit';

@Injectable({
  providedIn: 'root',
})
//Crea credito solo recibe msn de estado para la peticion
export class CrearCredito {
  private apiUrl = 'https://localhost:44343/api/CreditRegister';

  constructor(private http: HttpClient) { }
  CrearNuevoCreditoBase(data: newCredataData): Observable<void>{
      return this.http.post<void>(this.apiUrl,data);
    }
}