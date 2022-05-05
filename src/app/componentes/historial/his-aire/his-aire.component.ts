import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { services } from '../../servicio/service.service';
@Component({
  selector: 'app-his-aire',
  templateUrl: './his-aire.component.html',
  styleUrls: ['./his-aire.component.scss']
})
export class HisAireComponent implements OnInit {
  displayedColumns: string[] = ['valor', 'date', 'options'];

  dataSource!:MatTableDataSource<any>;
  @ViewChild('paginator') paginator!:MatPaginator
  @ViewChild(MatSort) matSort!:MatSort;



  constructor(private router:Router,public service:services) {
  }




  ngOnInit(): void {
 this.getaires()

}


  getaires(){
  this.service.getGrafAires().subscribe((res:any)=>{
   this.dataSource=new MatTableDataSource(res.response)
   this.dataSource.paginator=this.paginator;
   this.dataSource.sort=this.matSort;
    console.log(res.response,"GRAFAIRES")
  })
}
  deleteGrafAire(_id:string){
  console.log(_id,"QUE MANDO DE ID")
  this.service.delGrafTAires(_id).subscribe(
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
