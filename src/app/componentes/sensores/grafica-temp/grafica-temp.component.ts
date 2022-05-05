import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { GrafTempAire } from '../../modelos/graftempaire';
import { services } from '../../servicio/service.service';

@Component({
  selector: 'app-grafica-temp',
  templateUrl: './grafica-temp.component.html',
  styleUrls: ['./grafica-temp.component.scss']
})
export class GraficaTempComponent implements OnInit {

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
  yAxisLabel: string = 'Temperatura';
  timeline: boolean = true;

  private suscription!: Subscription
  temaire:any=[];

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

    this.llenadotemaire()
    var observable$=interval(40000)
    this.suscription=observable$.subscribe(()=>{
      this.llenadotemaire()
    })

}
ngOnDestroy(): void {
  console.log("DESUSCRIBIDO")
 this.suscription.unsubscribe();
}

  llenadotemaire(){
    this.service.getGrafTempAire().subscribe(
      (res:any)=>{
        console.log(res)
        this.temaire.valor1=res.response[0].valor
        this.temaire.valor2=res.response[1].valor
        this.temaire.valor3=res.response[2].valor
        console.log(this.temaire,"HUMEDAD")
        console.log(this.temaire.valor1,"VALOR1")
        console.log(this.temaire.valor2,"VALOR2")
        console.log(this.temaire.valor3,"VALOR3")
        this.multi = [
        {
          "name": "Hume.",
          "series": [
            {
              "name": "1",
              "value":this.temaire.valor3
            },
            {
              "name": "2",
              "value":this.temaire.valor2
            },
            {
              "name": "3",
              "value":this.temaire.valor1
            }
          ]
        }

      ];

      },
      err=>console.error(err)

    )
  }

}
