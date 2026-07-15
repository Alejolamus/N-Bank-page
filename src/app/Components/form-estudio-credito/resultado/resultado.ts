import { ChangeDetectorRef, Component } from '@angular/core';
import { CotizarValoresCompartidos } from '../../../services/cotizar/cotizar-valores-compartidos';
import { ValoresCotizacion } from '../../../models/CotizarCredito/valuesCotizacion';
import { detalleCotizacion } from '../../../models/CotizarCredito/detalleCotizacion';

@Component({
  selector: 'app-resultado',
  imports: [],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css',
})
export class ResultadoCotizacionValues {
  textAprovacion: string = '';
  cotizacion: detalleCotizacion| null = null;
  constructor(private cotizacionState: CotizarValoresCompartidos,
              private cdr: ChangeDetectorRef
  ){}
  ngOnInit(){
    this.cotizacionState.cotizacion$.subscribe(data =>{
      if (data) {
        this.cotizacion=data;
        if (this.cotizacion.valores.valueRiesgo===true){
          this.textAprovacion='Aprovado';
        }else{
          this.textAprovacion='No Aprovado';
        }
      this.cdr.detectChanges();
      }
    });
  }
}
