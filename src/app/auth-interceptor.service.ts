import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string|null = localStorage.getItem('token_access');
    console.log("SI HAY TOKEN",token);

    let request = req;
	//Validamos si el token existe
    if (token) {
      //Clonamos el token y lo mandamos en la cabecera de todas las peticiones HTTP
      request = req.clone({
        setHeaders: {
          //Autorizaciòn de tipo Bearer + token
          //El tipo de autorizaciòn depende del back
          Authorization: `bearer ${ token }`
          
        }});}return next.handle(request);}}

