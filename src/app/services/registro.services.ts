import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewClient } from '../models/new-client';
@Injectable({
  providedIn: 'root',
})
export class RegistroServices {
  private apiUrl = 'https://localhost:44343/api/CrearClient';

  constructor(private http: HttpClient) { }
  crearCliente(cliente: NewClient): Observable<string> {
      return this.http.post(this.apiUrl, cliente,{
      responseType: 'text'
    });
  }
}