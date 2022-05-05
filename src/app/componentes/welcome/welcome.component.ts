import { Component, OnInit } from '@angular/core';
import { services } from '../servicio/service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private service:services) { }

  ngOnInit(): void {

  }

}
