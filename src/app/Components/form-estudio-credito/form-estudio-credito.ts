import { ChangeDetectorRef, Component } from '@angular/core';
import { CurrencyData } from '../../services/currency/currency-data';
import { currencyDataForm } from '../../models/currencyDataF';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CotizarData } from '../../models/CotizarCredito/CotizarData';
import { CotizarValores } from '../../services/cotizar/cotizar-valores';
import { DtosProfiles } from '../../models/CotizarCredito/DataPerfil';
import { DtosSolicitudCredito } from '../../models/CotizarCredito/DataSolicitud';
import { ValoresCotizacion } from '../../models/CotizarCredito/valuesCotizacion';
import { CotizarValoresCompartidos } from '../../services/cotizar/cotizar-valores-compartidos';
import { detalleCotizacion } from '../../models/CotizarCredito/detalleCotizacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-estudio-credito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-estudio-credito.html',
  styleUrl: './form-estudio-credito.css',
})
export class FormEstudioCredito {
  constructor(private monedasParaFormulario: CurrencyData,
              private cotizacionesCreditos: CotizarValores,
              private cdr: ChangeDetectorRef,
              private servicioCompartidoValues: CotizarValoresCompartidos,
              private router: Router
  ){}
  divisas: currencyDataForm[]=[]
  //valores formulario//
  divisaSeleccionada: currencyDataForm | null =null;
  ingresosMinimos: number=0;
  ingresosMaximos: number=0;
  gastosCliente: number=0;
  valorCredito: number=0;
  frecuenciaDeCobro: number=0;
  numeroDeCuotas: number=0;
  // id en memora de navegador//
  ngOnInit(): void{
    console.log("ngoninnt funcionando")
    this.monedasParaFormulario.obtenerMonedas()
      .subscribe({
        next: (data)=> {
          this.divisas = data;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error(error);
        }
      })
      //registar endpoint y crear apgina que reciba los valores e imprima//
  }
  frecuenciaString: string='';
  CotizarCreditoYauht(){
    this.cdr.detectChanges();
    if (this.divisaSeleccionada){
      const dataPelfilUser: DtosProfiles={
      idClient: Number(localStorage.getItem('id')),
      minGanadoMensual:this.ingresosMinimos,
      maxGanadoMensual:this.ingresosMaximos,
      gastos:this.gastosCliente
    };
    const valoresSolicitud: DtosSolicitudCredito={
      valueOfCredit:this.valorCredito,
      frecuenciaCobro:this.frecuenciaDeCobro,
      fechaInicio: new Date(),
      numCuotas: this.numeroDeCuotas,
      idCurrency: this.divisaSeleccionada.idMoneda
    };
    const dataSolicitud: CotizarData={
      perfil: dataPelfilUser,
      dataCredit: valoresSolicitud
    };
    switch(this.frecuenciaDeCobro){
      case 0:
        this.frecuenciaString="Semanal";
        break;
      case 1:
        this.frecuenciaString="Quincenal";
        break;
      default:
        this.frecuenciaString="Mensual"
    }
    this.cdr.detectChanges();
    this.cotizacionesCreditos.obtenerValoresCreditoConsultado(dataSolicitud)
    .subscribe(
      {
        next: (Datas)=> {
          this.cdr.detectChanges();
          if(this.divisaSeleccionada){
            const valuesForShare: ValoresCotizacion = Datas;
            const detalleConsultaCreidto: detalleCotizacion={
              valores:valuesForShare,
              valorCredito:this.valorCredito,
              cantidadCuotas:this.numeroDeCuotas,
              frecuenciaCobro:this.frecuenciaString,
              simbolo:this.divisaSeleccionada.symbolo,
              idMoney:this.divisaSeleccionada.idMoneda,
              idUser:Number(localStorage.getItem('id'))
            }
          this.servicioCompartidoValues.guardarCotizacion(detalleConsultaCreidto)
          this.cdr.detectChanges();
          this.router.navigate(['/cotizar/resultado'])
          }          
        },
        error: (error) => {
          console.error(error);
        }
      }
    )
    }  
  } 
}