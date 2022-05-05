import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contacto } from '../modelos/contacto';
import { services } from '../servicio/service.service';

@Component({
  selector: 'app-contactoinicio',
  templateUrl: './contactoinicio.component.html',
  styleUrls: ['./contactoinicio.component.scss']
})
export class ContactoinicioComponent implements OnInit {
  conc:contacto={
    nombre:"",
    apellido:"",
    email:"",
    mensaje:"",

  }
  constructor(private router:Router,private service:services) { }

  ngOnInit(): void {
  }

  guardarcontacto(){
    console.log(this.conc)
this.service.addContacto(this.conc).subscribe(
  res=>{
    console.log(res),
    alert("AGREGADO")
  },
  err=>{
    alert("Falta un dato verifica")
    console.error(err,"ERROR")

  }
)
  }
}
