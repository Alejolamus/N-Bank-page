import { ChangeDetectorRef, Component } from '@angular/core';
import { CotizarValoresCompartidos } from '../../../services/cotizar/cotizar-valores-compartidos';
import { detalleCotizacion } from '../../../models/CotizarCredito/detalleCotizacion';
import { CrearCredito } from '../../../services/Creditos/crear-credito';
import { newCredataData } from '../../../models/Creditos/newCredit';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-resultado',
  imports: [RouterLink],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css',
})
export class ResultadoCotizacionValues {
  textAprovacion: string = '';
  numEnumFrecuencia=4;
  cotizacion: detalleCotizacion| null = null;
  constructor(private cotizacionState: CotizarValoresCompartidos,
              private cdr: ChangeDetectorRef,
              private crearCredito: CrearCredito,
              private router: Router
  ){}
  ngOnInit(){
    this.cotizacionState.cotizacion$.subscribe(data =>{
      if (data) {
        this.cotizacion=data;
        if (this.cotizacion.valores.valueRiesgo===true){
          this.textAprovacion='Aprobado';
        }else{
          this.textAprovacion='No Aprobado';
        }
      this.cdr.detectChanges();
      }
    });
  }
  CrearCreditoDb(){
    if (this.cotizacion){
      switch (this.cotizacion.frecuenciaCobro){
        case 'Semanal':
          this.numEnumFrecuencia=0;
          break;
        case 'Quincenal':
          this.numEnumFrecuencia=1;
          break;
        default:
          this.numEnumFrecuencia=2;
      }
      this.cdr.detectChanges();
      const datos:newCredataData={
        enumFrecuenciaFront:this.numEnumFrecuencia,
        numDeCuotras:this.cotizacion.cantidadCuotas,
        primerPago:this.cotizacion.valores.fechaPrimerPago,
        valorCredito:this.cotizacion.valorCredito,
        moneda:this.cotizacion.idMoney,
        idCliente:this.cotizacion.idUser
      }
      this.crearCredito.CrearNuevoCreditoBase(datos).subscribe(
        {
        next: () => {
          this.router.navigate(['/'])
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}
