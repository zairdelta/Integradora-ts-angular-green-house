import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { services } from './componentes/servicio/service.service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  resp : boolean =  true;
  isadmin!:true
  isnotadin!:false

  constructor(private router:Router,private service:services){

  }
  canActivate():Observable<boolean>{
    return this.service.getseision().pipe(map((res: any) => {
      console.log(res,"ESTO GUARD")
      if (res.data.sesion == 1) {
        return true;
      }
      this.router.navigate(["/inicio"])
      return false;

    }));

  }

    canActivateChild():Observable<boolean>{

      return this.service.isLoggedIn().pipe(
        take(1),

        map((isloged:any)=>isloged.response)

      )
    }




}
