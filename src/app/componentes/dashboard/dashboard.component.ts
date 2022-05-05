import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { services } from '../servicio/service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {
  events: string[] = [];
  opened!: boolean;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  select=0;
  resp:any=[]
  isOpenSidebar=false;
  isOpenOptions=true;
  isOpenOptions2=true;
  isOpenOptions3=true;
  constructor(private service:services) { }
  ngAfterViewInit(): void {
    // this.service.cargar(["sidebar"])
  }
  ngOnInit(): void {
    this.getsesion()
  }

  toggleSidebar(){
    this.isOpenSidebar= !this.isOpenSidebar;
  }
  toggleOptions(){
    this.isOpenOptions= !this.isOpenOptions;
  }
  getsesion(){
    this.service.getseision().subscribe((res:any)=>{
      console.log(res,"RESP")
      this.resp.url_foto=res.data.url_foto;
      this.resp.username=res.data.username;

    })
  }
  comments(){
    this.select=1;
  }
  notes(){
    this.select=2;
  }
  history(){
    this.select=3;
  }
  permission(){
    this.select=4;
  }

  logout(){
    this.service.logout()
  }

  }


