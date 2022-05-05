import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../../servicio/service.service';
import {interval,Subscription,take,timer} from 'rxjs';
@Component({
  selector: 'app-grafica-hum',
  templateUrl: './grafica-hum.component.html',
  styleUrls: ['./grafica-hum.component.scss']
})
export class GraficaHumComponent implements OnInit,OnDestroy {
  view: [number,number] = [100, 300];
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '3 Ultimos valores';
  yAxisLabel: string = 'Humedad_aire';
  timeline: boolean = true;

  private suscription!: Subscription
  hum:any=[];

  multi = [
    {
      "name": "Hume.",
      "series": [
        {
          "name": "1",
          "value":0
        },
        {
          "name": "3",
          "value":0
        },
        {
          "name": "5",
          "value":0
        }
      ]
    }

  ];

  constructor(private router:Router,private service:services) {
    this.view = [innerWidth / 2.0, 300];

  }

  onResize(event:any) {
    this.view = [event.target.innerWidth / 1.35, 400];
}

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {

    this.llenadohum()
    var observable$=interval(40000)
    this.suscription=observable$.subscribe(()=>{
      this.llenadohum()
    })

}
ngOnDestroy(): void {
  console.log("DESUSCRIBIDO")
 this.suscription.unsubscribe();
}

  llenadohum(){
    this.service.getGrafHumAire().subscribe(
      (res:any)=>{
        console.log(res)
        this.hum.valor1=res.response[0].valor
        this.hum.valor2=res.response[1].valor
        this.hum.valor3=res.response[2].valor
        console.log(this.hum,"HUMEDAD")
        console.log(this.hum.valor1,"VALOR1")
        console.log(this.hum.valor2,"VALOR2")
        console.log(this.hum.valor3,"VALOR3")
        this.multi = [
        {
          "name": "Hume.",
          "series": [
            {
              "name": "1",
              "value":this.hum.valor3
            },
            {
              "name": "2",
              "value":this.hum.valor2
            },
            {
              "name": "3",
              "value":this.hum.valor1
            }
          ]
        }

      ];

      },
      err=>console.error(err)

    )
  }
}
