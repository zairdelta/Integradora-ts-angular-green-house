import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, observable, Observable, Subject, tap, throwError,map } from 'rxjs';

import { User } from '../modelos/user';
import { contacto } from '../modelos/contacto';
import { GrafHumAire } from '../modelos/grafhumaire';
import { notes } from '../modelos/notes';
import { permissions } from '../modelos/permissions';
import { Router } from '@angular/router';
import { GrafHumSuelo } from '../modelos/grafHumSuelo';
import { GrafAire } from '../modelos/grafaire';
import { GrafTempAire } from '../modelos/graftempaire';
import { Sesions } from '../modelos/sesions';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class services {
  private contactos=new BehaviorSubject<any[]>([]);
  public responsecontactos:Observable<any[]>=this.contactos.asObservable()
  isAdmin=false;

  apiURL=environment.apiURL;
  private _refreshusers$=new Subject<void>();

  private _refresh$=new Subject<void>();
  constructor(private router:Router,private http:HttpClient) { }
/*--------------------------------LOGIN Y REGISTRO----------------------------------*/
/*-------------------------------------TOKEN----------------------------------------*/
get refresh$(){
  return this._refresh$;
}
get refreshuser$(){
  return this._refreshusers$;
}
gettoken(){
    return this.http.get<any>(`${this.apiURL}token`);
  }
  getseision(){
    return this.http.get<any>(`${this.apiURL}token`);
  }
  isLoggedIn(){
    return this.http.get<any>(`${this.apiURL}isLoggedIn`);
  }
 logout():void{
  this.http.get<any>(`${this.apiURL}logout`);
   localStorage.removeItem('token_access')
   this.router.navigate(["/login"])
   Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Good Bye!',
    showConfirmButton: false,
    timer: 1500
  })
 }
  registro(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}register`,user);
  }

  login(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}login`,user)
    .pipe(
      catchError((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Credentials do not match, please try again',
        })

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      }))
  }

  /*---------------------------------USUARIOS----------------------------------------*/


  getusuarios():Observable<any>{
    return this.http.get<permissions[]>(`${this.apiURL}USUARIO`)
    .pipe(map((resp:any)=>
      resp.response

  ))
  }
  deletusuario(id?:string){
    return this.http.delete(`${this.apiURL}USUARIO/${id}`)
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      }))
  }
  getusuario(id:number|string|null){
    return this.http.get(`${this.apiURL}USUARIO/${id}`);
}
  updateusuario(updatepermissions:permissions):Observable<permissions>{
    return this.http.put<permissions>(`${this.apiURL}USUARIO/${updatepermissions.id}`,updatepermissions)
    .pipe(
      tap(()=>{
        this.refreshuser$.next();
      })
    )
}
  /*---------------------------------NOTES----------------------------------------*/



  getnotes():Observable<any>{
   return this.http.get<notes[]>(`${this.apiURL}NOTES`)
   .pipe(map((resp:any)=>
     resp.response

 ))
 }
 deletnote(_id?:string){
  return this.http.delete(`${this.apiURL}NOTES/${_id}`)
  .pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      //Handle the error here

      return throwError(err);    //Rethrow it back to component
    }))
}
addnote(note:notes){
  return this.http.post(`${this.apiURL}NOTES`,note)
  .pipe(
    tap(()=>{
      this.refresh$.next();
    })
  )
}
 /*---------------------------------CONTACTO----------------------------------------*/
 mostrar(){
   const request=this.getContactos().pipe(tap((resp:any)=>{
     this.contactos.next(resp);
     console.log(resp)
   }))
   return request.subscribe();
 }
 getContactos():Observable<any>{
  return this.http.get<contacto[]>(`${this.apiURL}CONTACTOS`)
  .pipe(map((resp:any)=>
    resp.response

))
}
addContacto(contacto:contacto){
  return this.http.post(`${this.apiURL}CONTACTO`,contacto)

}
getContacto(_id?:contacto){
  return this.http.get(`${this.apiURL}CONTACTO/${_id}`);
}

deletContacto(_id?:string){
  return this.http.delete(`${this.apiURL}CONTACTO/${_id}`)
  .pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      //Handle the error here

      return throwError(err);    //Rethrow it back to component
    }))
}
  /*---------------------------------COMENTARIO----------------------------------------*/

// grafica temperatura aire
  getGrafTempAire(){
    return this.http.get<GrafTempAire[]>(`${this.apiURL}TEM_AIRE`);
  }
  getGrafTempAires(){
    return this.http.get<GrafTempAire[]>(`${this.apiURL}TEM_AIRES`);
  }
  delGrafTempAires(_id?:string){
    return this.http.delete<GrafTempAire[]>(`${this.apiURL}TEM_AIRE/${_id}`);
  }


  // grafica aires
  getGrafAire(){
    return this.http.get<GrafAire[]>(`${this.apiURL}AIRE`)
    .pipe(map((resp:any)=>
    resp.response[0]
    ))
  }
  getGrafAires(){
    return this.http.get<GrafAire[]>(`${this.apiURL}AIRES`);
  }
  delGrafTAires(_id?:string){
    return this.http.delete<GrafAire[]>(`${this.apiURL}AIRE/${_id}`);
  }
  // grafica humedad suelo
 getGrafHumSuelo(){
  return this.http.get<GrafHumSuelo[]>(`${this.apiURL}HUM_SUELO`)
  .pipe(map((resp:any)=>
  resp.response[0]
  ))
}
getGrafHumSuelos(){
  return this.http.get<GrafHumSuelo[]>(`${this.apiURL}HUM_AIRES`);
}
delGrafTHumSuelo(_id?:string){
  return this.http.delete<GrafHumSuelo[]>(`${this.apiURL}HUM_AIRE/${_id}`);
}
// grafica humedad aire
getGrafHumAire(){
  return this.http.get<GrafHumAire[]>(`${this.apiURL}HUM_AIRE`);
}
getGrafHumAires(){
  return this.http.get<GrafHumAire[]>(`${this.apiURL}HUM_AIRES`);
}
delGrafTHumAires(_id?:string){
  return this.http.delete<GrafHumAire[]>(`${this.apiURL}HUM_AIRE/${_id}`);
}
getSesions(){
  return this.http.get<Sesions[]>(`${this.apiURL}SESIONS`);
}

}


