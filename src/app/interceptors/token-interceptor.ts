import { HttpInterceptorFn } from '@angular/common/http';

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