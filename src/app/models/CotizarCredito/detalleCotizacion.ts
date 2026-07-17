import { ValoresCotizacion } from "./valuesCotizacion";

export interface detalleCotizacion{
    valores:ValoresCotizacion;
    valorCredito: number;
    cantidadCuotas: number;
    frecuenciaCobro: string;
    simbolo: string;
    idMoney: number;
    idUser: number;
}