import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { JwtClaims } from '../../models/jwt/JwtClaims';

@Injectable({
  providedIn: 'root',
})
export class DecodigicarTokenService {
  //decifra el token y guarda los claims no genericos en el localStorage
  decodificarToken() {
    const token = localStorage.getItem("token");

    if (token) {
      const claims: JwtClaims = jwtDecode<any>(token);
      localStorage.setItem("user_name", claims.name);
      localStorage.setItem("id", claims.id);
      localStorage.setItem(
        "rol_user",
        claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      );
    }
  }
}
