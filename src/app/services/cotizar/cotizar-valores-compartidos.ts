import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ValoresCotizacion } from '../../models/CotizarCredito/valuesCotizacion';
import { detalleCotizacion } from '../../models/CotizarCredito/detalleCotizacion';

@Injectable({
  providedIn: 'root',
})
export class CotizarValoresCompartidos {
  private cotizacionSubject = new BehaviorSubject<detalleCotizacion | null>(null);
  cotizacion$ = this.cotizacionSubject.asObservable();
  guardarCotizacion(cotizacion: detalleCotizacion) {
    this.cotizacionSubject.next(cotizacion);
  }
}
