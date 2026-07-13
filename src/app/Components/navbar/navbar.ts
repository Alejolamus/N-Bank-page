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
  get estaLogueado(): boolean {
    return localStorage.getItem("token") !== null;
  }

  get nombreUsuario(): string {
    return localStorage.getItem("user_name") ?? "";
  }

  cerrarSesion(){
    this.logoutServicios.logout();
    this.router.navigate(['/']);
  }
}