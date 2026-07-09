import { Component } from '@angular/core';
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
              private regirtrarService: RegistroServices
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
  ContraseñaUsuario: string='';
  ConfirmacionContraseña: string='';
  terminosYcondiciones: boolean=false;
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
    console.log(this.municipios);
  }
  
  CrearNuevoCliente(nameClient: string,
                    correoClient: string,
                    telefonoClient: string,
                    celularCleint: string,
                    tipoDocClient: string,
                    numeroDocClient: string,
                    municipioClient: number,
                    contraseñaClient: string,
                    contraseñaConfClient: string,
                    terminos:boolean
                    ){
  
  let tipoDocumentoEnum: number = 0;
  switch (tipoDocClient) {
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
  if (contraseñaClient===contraseñaConfClient && terminos===true){
    const nuevocliente: NewClient={
    name: nameClient,
    idLocation: municipioClient,
    documentType: tipoDocumentoEnum,
    document: numeroDocClient,
    password: contraseñaClient,
    email: correoClient,
    cellphone: celularCleint,
    phone: telefonoClient 
  }
  this.regirtrarService.crearCliente(nuevocliente)
  .subscribe({
    next: (respuesta) => {
      console.log("Cliente registrado", respuesta);
    },
    error: (error) => {
      console.error(error);
    }
  });
  }
}
}