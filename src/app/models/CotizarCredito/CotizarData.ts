import { DtosProfiles } from "./DataPerfil";
import { DtosSolicitudCredito } from "./DataSolicitud";

export interface CotizarData {
  perfil: DtosProfiles;
  dataCredit: DtosSolicitudCredito;
}