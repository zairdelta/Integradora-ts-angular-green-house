import { Component, OnInit } from '@angular/core';
import { notes } from '../../modelos/notes';
import { services } from '../../servicio/service.service';

@Component({
  selector: 'app-aggnotes',
  templateUrl: './aggnotes.component.html',
  styleUrls: ['./aggnotes.component.scss']
})
export class AggnotesComponent implements OnInit {
  note: notes={

    title:'',
    note:'',

  };
  constructor(private service:services) { }

  ngOnInit(): void {
  }

  guardarnote(){
    this.service.addnote(this.note).subscribe(
      res=>{
        console.log(res),
        alert("AGREGADO")
      },
      err=>{
        alert("Falta un dato verifica")

        console.error(err,"ERROR")

      }
    )    }

}
