import { Component } from '@angular/core';
import { FormRegistro } from '../../Components/register/form/form';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormRegistro,Footer],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {}
