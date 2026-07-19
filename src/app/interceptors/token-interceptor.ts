import { HttpInterceptorFn } from '@angular/common/http';
//inyecta el token para las peticiones que requieren autorizacion
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token');
  if (token) {
    const nuevaPeticion = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(nuevaPeticion);
  }
  return next(req);
};