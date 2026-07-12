import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { DataLogin } from '../../../models/dataLogin';
import { LoginServices } from '../../../services/login/login.services';
import { DecodigicarTokenService } from '../../../services/JwtDecodificar/decodigicar-token.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormLogin {
  constructor(private LoginServicios: LoginServices,
              private decodificarToken: DecodigicarTokenService
  ){}
  correoUsuario: string='';
  passUsuario: string='';
  
  login(){
  const datosIngreso: DataLogin={
    email: this.correoUsuario,
    contraseña: this.passUsuario
  }
  this.LoginServicios.loginAndToken(datosIngreso)
  .subscribe({
    next: (respuesta) => {
      console.log("resultado Login", respuesta);
      localStorage.setItem("token", respuesta);
      this.decodificarToken.decodificarToken();
    },
    error: (error) => {
      switch (error.status){
        case 401:
            console.log("Contraseña incorrecta");
            break;

          case 404:
            console.log("Usuario no existe");
            break;

          default:
            console.log("Error inesperado");
      }
    }
  });
  }
}
