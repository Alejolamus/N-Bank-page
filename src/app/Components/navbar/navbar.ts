import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LogoutService } from '../../services/logout/logout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor (private logoutServicios: LogoutService,
              private router: Router
  ){}
  //Busca la existencia del token de logeo y uso para el api
  get estaLogueado(): boolean {
    return localStorage.getItem("token") !== null;
  }
  // busca el nombre del usuario
  get nombreUsuario(): string {
    return localStorage.getItem("user_name") ?? "";
  }
  //limpia memoria del navegador y envia al inicio
  cerrarSesion(){
    this.logoutServicios.logout();
    this.router.navigate(['/']);
  }
}