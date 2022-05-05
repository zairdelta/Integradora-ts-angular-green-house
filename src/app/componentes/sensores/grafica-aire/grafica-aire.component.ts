import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { services } from '../../servicio/service.service';

@Component({
  selector: 'app-grafica-aire',
  templateUrl: './grafica-aire.component.html',
  styleUrls: ['./grafica-aire.component.scss']
})
export class GraficaAireComponent implements OnInit,OnDestroy {
  private suscription!: Subscription
  aire:any=[];
  constructor(private service:services) { }

  ngOnDestroy(): void {
    this.suscription.unsubscribe()
  }


  ngOnInit(): void {
    this.getaire()
    console.log(this.aire,"ESTO TRAIGO")
    var observable$=interval(40000);
    this.suscription=observable$.subscribe(()=>{
      this.getaire()
    })
  }

  getaire(){
    this.service.getGrafAire().subscribe((res:any)=>{
      console.log(res,"RESPONSE")
      console.log(res.valor,"VALOR")
      this.aire.valor=res.valor;
      this.aire.date=res.date;
    })
  }
}
