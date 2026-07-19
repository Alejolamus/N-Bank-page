import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  //Limpia la localStorage con la cual mantego estado de sesion abierta
  logout(){
    localStorage.clear();
  }
}
