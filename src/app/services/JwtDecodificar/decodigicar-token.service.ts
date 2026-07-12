import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { JwtClaims } from '../../models/jwt/JwtClaims';

@Injectable({
  providedIn: 'root',
})
export class DecodigicarTokenService {
  decodificarToken(){
    const token = localStorage.getItem("token");
    if (token!=null){
      const claims=jwtDecode<JwtClaims>(token);
      localStorage.setItem("user_name", claims.name);
      localStorage.setItem("id_user",claims.id);
      localStorage.setItem("rol_user",claims.rol);
    }
  }
}
