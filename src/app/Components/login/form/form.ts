import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { DataLogin } from '../../../models/dataLogin';
import { LoginServices } from '../../../services/login/login.services';
import { DecodigicarTokenService } from '../../../services/JwtDecodificar/decodigicar-token.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormLogin {
  constructor(private LoginServicios: LoginServices,
              private decodificarToken: DecodigicarTokenService,
              private router: Router,
              private cdr: ChangeDetectorRef
  ){}
  correoUsuario: string='';
  passUsuario: string='';
  mensajeError: string='';
  login() {

  this.mensajeError = "";

  const datosIngreso: DataLogin = {
    email: this.correoUsuario,
    password: this.passUsuario
  };

  this.LoginServicios.loginAndToken(datosIngreso)
    .subscribe({
      next: (respuesta) => {
        console.log('ingreso a next');
        console.log("resultado Login", respuesta);
        localStorage.setItem("token", respuesta);
        this.decodificarToken.decodificarToken();
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log('intrese al error');
        switch (error.status) {
          case 401:
            this.mensajeError = "Contraseña incorrecta";
            break;

          case 404:
            this.mensajeError = "Usuario no existe";
            break;

          default:
            this.mensajeError = "Error inesperado. Intente de nuevo.";
        }
        this.cdr.detectChanges();
        console.log(this.mensajeError);
      }
    });
  }
}
