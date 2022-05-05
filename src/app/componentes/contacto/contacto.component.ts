import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource, } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { contacto } from '../modelos/contacto';
import { services } from '../servicio/service.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit{
  @ViewChild('paginator') paginator!:MatPaginator
  @ViewChild(MatSort) matSort!:MatSort;

  displayedColumns=['nombre','email','mensaje','options'];
  dataSource!:MatTableDataSource<any>



  constructor(private router:Router,public service:services) { }



  ngOnInit(): void {
this.getcontactos()

}


getcontactos(){
  this.service.getContactos().subscribe((res:any)=>{
    this.dataSource=new MatTableDataSource(res);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.matSort;

    console.log(res)
  })
}
  nuevoautor(){
    this.router.navigate(['ini/addcome'])
  }

  deleteComentario(_id:string){
    console.log(_id,"QUE MANDO DE ID")
    this.service.deletContacto(_id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
      },
      err=>{
        console.error(err)

      })}
      filterData($event:any){
this.dataSource.filter=$event.target.value;
      }


}
