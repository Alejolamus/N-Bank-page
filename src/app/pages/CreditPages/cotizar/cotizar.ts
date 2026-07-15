import { Component } from '@angular/core';
import { Navbar } from '../../../Components/navbar/navbar';
import { Footer } from '../../../Components/footer/footer';
import { FormEstudioCredito } from '../../../Components/form-estudio-credito/form-estudio-credito';

@Component({
  selector: 'app-cotizar',
  imports: [Navbar,Footer,FormEstudioCredito],
  templateUrl: './cotizar.html',
  styleUrl: './cotizar.css',
})
export class Cotizar {}
