import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { services } from '../../servicio/service.service';
@Component({
  selector: 'app-his-humsuelo',
  templateUrl: './his-humsuelo.component.html',
  styleUrls: ['./his-humsuelo.component.scss']
})
export class HisHumsueloComponent implements OnInit {
  displayedColumns: string[] = ['valor', 'date', 'options'];

  dataSource!:MatTableDataSource<any>;
  @ViewChild('paginator') paginator!:MatPaginator
  @ViewChild(MatSort) matSort!:MatSort;



  constructor(private router:Router,public service:services) {
  }




  ngOnInit(): void {
 this.gethumsuelo()

}


  gethumsuelo(){
  this.service.getGrafHumSuelos().subscribe((res:any)=>{
   this.dataSource=new MatTableDataSource(res.response)
   this.dataSource.paginator=this.paginator;
   this.dataSource.sort=this.matSort;
    console.log(res.response,"GRAFAIRES")
  })
}
  deleteGrafHumAire(_id:string){
  console.log(_id,"QUE MANDO DE ID")
  this.service.delGrafTHumSuelo(_id).subscribe(
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
