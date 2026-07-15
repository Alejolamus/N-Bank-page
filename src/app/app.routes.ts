import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Cotizar } from './pages/CreditPages/cotizar/cotizar';
import { ResultadoCotizacion } from './pages/CreditPages/resultado-cotizacion/resultado-cotizacion';

export const routes: Routes = [
    {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'cotizar',
    component: Cotizar
  },
  {
    path: 'cotizar/resultado',
    component: ResultadoCotizacion
  },
  {
        path:'**',
        redirectTo: ''
    },
];
