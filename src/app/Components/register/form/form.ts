import { Component } from '@angular/core';
import { UbicacionesColService } from '../../../services/ubicaciones.col.service';
import { UbicacionCol } from '../../../models/ubicaciones-col';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormRegistro {
  constructor(private ubicacionesService: UbicacionesColService) { }
  ubicaciones: UbicacionCol[] = [];
  departamentos: string[] = [];
  municipios: string[] = [];
  departamentoSeleccionado: string = '';
  ngOnInit(): void {
    console.log("Entré al ngOnInit");
    this.ubicacionesService.obtenerUbicaciones()
      .subscribe({

        next: (data) => {
          console.log(data);
          this.ubicaciones = data;

          this.departamentos = data.map(x => x.name);
        },

        error: (error) => {

          console.error(error);

        }
      });
    }
  municipiosService(departamet: string)
  {
    const arregloMunicios = this.ubicaciones.find(x=>x.name===departamet);
    if (arregloMunicios){
      this.municipios= arregloMunicios.municipios;
    }else{this.municipios=[]}   
  }
}