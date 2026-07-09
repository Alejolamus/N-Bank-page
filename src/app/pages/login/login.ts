import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../Components/footer/footer';
import { FormLogin } from '../../Components/login/form/form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Footer, FormLogin],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
