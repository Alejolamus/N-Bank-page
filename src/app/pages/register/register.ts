import { Component } from '@angular/core';
import { FormRegistro } from '../../Components/register/form/form';
import { Footer } from '../../Components/footer/footer';
import { Navbar } from '../../Components/navbar/navbar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormRegistro,Footer,Navbar],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {}
