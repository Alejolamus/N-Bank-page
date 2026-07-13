import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataLogin } from '../../models/dataLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {

  private apiUrl = 'https://localhost:44343/api/LoginClient/Login';

  constructor(private http: HttpClient) { }

  loginAndToken(data: DataLogin): Observable<string> {
  return this.http.post(this.apiUrl, data, {
    responseType: 'text'
  });
}
}