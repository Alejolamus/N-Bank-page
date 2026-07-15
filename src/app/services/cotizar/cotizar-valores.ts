import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CotizarData } from '../../models/CotizarCredito/CotizarData';
import { ValoresCotizacion } from '../../models/CotizarCredito/valuesCotizacion';

@Injectable({
  providedIn: 'root',
})
export class CotizarValores {
  private apiUrl = 'https://localhost:44343/api/Cotizar';

  constructor(private http: HttpClient) { }
  obtenerValoresCreditoConsultado(data: CotizarData): Observable<ValoresCotizacion> {
      return this.http.post<ValoresCotizacion>(this.apiUrl,data);
    }
}
