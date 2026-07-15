import { Component } from '@angular/core';
import { Navbar } from '../../../Components/navbar/navbar';
import { Footer } from '../../../Components/footer/footer';
import { ResultadoCotizacionValues } from '../../../Components/form-estudio-credito/resultado/resultado';

@Component({
  selector: 'app-resultado-cotizacion',
  imports: [Navbar,Footer,ResultadoCotizacionValues],
  templateUrl: './resultado-cotizacion.html',
  styleUrl: './resultado-cotizacion.css',
})
export class ResultadoCotizacion {}
