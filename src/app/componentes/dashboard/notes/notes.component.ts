import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { notes } from '../../modelos/notes';
import { services } from '../../servicio/service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
   note: notes={

    title:'',
    note:'',
    date:'',

  };
  notes!:any[]
  constructor(private service:services) { }
  suscription!:Subscription;

  ngOnInit(): void {
    this.getnotes();

    this.suscription=this.service.refresh$.subscribe(()=>{
      this.getnotes();
    })



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
  getnotes(){
    this.service.getnotes().subscribe((res:any)=>{
      this.notes=res;
      console.log(this.notes)
    })
  }
  deleteNote(_id:string){
    console.log(_id,"QUE MANDO DE ID")
    this.service.deletnote(_id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'record deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
      },
      err=>{
        console.error(err)

      })}

}
