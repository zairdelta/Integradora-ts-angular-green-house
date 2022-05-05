import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { services } from '../servicio/service.service';

@Component({
  selector: 'app-nav-bar-ini2',
  templateUrl: './nav-bar-ini2.component.html',
  styleUrls: ['./nav-bar-ini2.component.scss']
})
export class NavBarIni2Component implements OnInit {
  loog!:boolean;
  resp:any=[];
  estado=0;
  constructor(private service:services,private router:Router) { }

  ngOnInit(): void {
    this.service.isLoggedIn().subscribe((res:any)=>{
      this.loog=res;
    }, err => {
      this.loog=false
    })


    this.service.gettoken().subscribe(
      res=>{
        this.resp=res.data.sesion,
        console.log(this.resp)
      },
      err=>{

          console.error(err)
      });
    }
    admin(){
      this.router.navigate(["ini/dash"])
     }


    cerrarsesion(){
      this.service.logout()
    }


}
