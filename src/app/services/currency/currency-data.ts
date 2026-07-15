import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { currencyDataForm } from '../../models/currencyDataF';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyData {
  private apiUrl = 'https://localhost:44343/api/currencysDataForm';

  constructor(private http: HttpClient) { }
  obtenerMonedas(): Observable<currencyDataForm[]> {
      return this.http.get<currencyDataForm[]>(this.apiUrl);
    }
}