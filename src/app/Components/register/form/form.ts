import { ChangeDetectorRef, Component } from '@angular/core';
import { UbicacionesColService } from '../../../services/ubicaciones.col.service';
import { UbicacionCol } from '../../../models/ubicaciones-col';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { MunicipiosDeparmanent } from '../../../models/municipio-deparmanent';
import { NewClient } from '../../../models/new-client';
import { RegistroServices } from '../../../services/registro.services';
@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormRegistro {
  constructor(private ubicacionesService: UbicacionesColService,
              private regirtrarService: RegistroServices,
              private cdr: ChangeDetectorRef
  ) { }
  ubicaciones: UbicacionCol[] = [];
  departamentos: string[] = [];
  municipios: MunicipiosDeparmanent[] = [];
  //valores del formulario//
  departamentoSeleccionado: string = '';
  NombreUsuario: string='';
  CorreoUsuario: string='';
  numerotelegono: string='';
  numeroCelular: string='';
  TipoDoc: string='';
  municipioSeleccionado: number=0;
  numeroDocumento: string='';
  passUsuario: string='';
  ConfirmacionPass: string='';
  terminosYcondiciones: boolean=false;
  //msn//
  mensajeStatus: string='';
  //consume el servicio para rellenar el selector de deparatamentos
  ngOnInit(): void {
    this.ubicacionesService.obtenerUbicaciones()
      .subscribe({

        next: (data) => {
          this.ubicaciones = data;
          this.departamentos = data.map(x => x.name);
        },

        error: (error) => {
          console.error(error);
        }
      });
    }
  //llena los municipios en funcion del departamento
  municipiosService(departamet: string)
  {
    const arregloMunicios = this.ubicaciones.find(x=>x.name===departamet);
    if (arregloMunicios){
      this.municipios= arregloMunicios.municipios;
    }else{this.municipios=[]}   
  }
  //consume servicio para genera cliente
  CrearNuevoCliente(){
  
  let tipoDocumentoEnum: number = 0;
  switch (this.TipoDoc) {
  case "C.C":
    tipoDocumentoEnum = 0;
    break;

  case "C.E":
    tipoDocumentoEnum = 1;
    break;

  case "P.P":
    tipoDocumentoEnum = 2;
    break;

  default:
    throw new Error("Tipo de documento no válido");
                    }
  if (this.passUsuario===this.ConfirmacionPass && this.terminosYcondiciones===true){
    const nuevocliente: NewClient={
    name: this.NombreUsuario,
    idLocation: this.municipioSeleccionado,
    documentType: tipoDocumentoEnum,
    document: Number(this.numeroDocumento),
    password: this.passUsuario,
    email: this.CorreoUsuario,
    cellphone: this.numerotelegono,
    phone: this.numeroCelular 
  }
  this.regirtrarService.crearCliente(nuevocliente)
  .subscribe({
    next: (respuesta) => {
      this.mensajeStatus=respuesta;
    },
    error: (error) => {
      console.error(error);
      this.mensajeStatus=error;
    }
  });
  }
  this.cdr.detectChanges();
}
}