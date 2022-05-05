import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { services } from '../../servicio/service.service';

@Component({
  selector: 'app-grafica-hum-suelo',
  templateUrl: './grafica-hum-suelo.component.html',
  styleUrls: ['./grafica-hum-suelo.component.scss']
})
export class GraficaHumSueloComponent implements OnInit,OnDestroy {
  private suscription!: Subscription
  humsuelo:any=[];
  constructor(private service:services) { }

  ngOnDestroy(): void {
    this.suscription.unsubscribe()
  }


  ngOnInit(): void {
    this.gethumsue()
    console.log(this.humsuelo,"ESTO TRAIGO")
    var observable$=interval(40000);
    this.suscription=observable$.subscribe(()=>{
      this.gethumsue()
    })
  }

  gethumsue(){
    this.service.getGrafHumSuelo().subscribe((res:any)=>{
      console.log(res,"RESPONSE")
      console.log(res.valor,"VALOR")
      this.humsuelo.valor=res.valor;
      this.humsuelo.date=res.date;
    })
  }
}
