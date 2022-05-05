import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { permissions } from '../../modelos/permissions';
import { services } from '../../servicio/service.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  displayedColumns: string[] = ['username','email','url_foto','sesion','options'];
  edit: permissions={
    id:0,
    email:"",
    url_foto:"",
    username:"",
    sesion:""
  };
  sesions:any=[];
  dataSource!:MatTableDataSource<any>;
  @ViewChild('paginator') paginator!:MatPaginator
  @ViewChild(MatSort) matSort!:MatSort;
  constructor(private router:Router,public service:services) {
  }
  suscription!:Subscription;




  ngOnInit(): void {
 this.getusuarios()
 this.getsesions()

 this.suscription=this.service.refreshuser$.subscribe(()=>{
  this.getusuarios();
})
}
getsesions(){
  this.service.getSesions().subscribe((res:any)=>{

    this.sesions=res
    console.log(res,"SESIONS")
  })
}

getusuarios(){
  this.service.getusuarios().subscribe((res:any)=>{

    this.dataSource=new MatTableDataSource(res)
   this.dataSource.paginator=this.paginator;
   this.dataSource.sort=this.matSort;
  })
}
deleteUsuario(id:string){
  console.log(id,"QUE MANDO DE ID")
  this.service.deletusuario(id).subscribe(
    res=>{
      console.log(res)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'record deleted successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.ngOnInit();
    },
    err=>{
      console.error(err)

    })}
    editarusuarior(id:string){
      this.service.getusuario(id).subscribe((data:any)=>{
        console.log("ERROR1")

        this.edit=data;
        console.log(this.edit,"ESTO TRAIGO A LA VENTANA")

        console.log(this.edit)
      })

    }
    actualizarusuario(permissions:permissions){
      this.service.updateusuario(permissions).subscribe((data:any)=>{
        console.log(this.edit,"HASTA AQUI LLEGA CON DATOS SI LO ACTUALIZA PERO DESPUES SALE ESE ERROR")
        alert("actualizado con exito")
      },
      err=>{
        alert("Falta un dato verifica")

        console.error(err,"ERROACTUALIZAR")

      })
    }
    filterData($event:any){
      this.dataSource.filter=$event.target.value;
    }
  }


