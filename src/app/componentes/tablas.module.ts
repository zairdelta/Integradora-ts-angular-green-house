import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasRoutingModule } from './tablas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficaHumComponent } from './sensores/grafica-hum/grafica-hum.component';
import { GraficaHumSueloComponent } from './sensores/grafica-hum-suelo/grafica-hum-suelo.component';
import { GraficaNFCComponent } from './sensores/grafica-nfc/grafica-nfc.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DataTablesModule } from "angular-datatables";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AggnotesComponent } from './dashboard/aggnotes/aggnotes.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { CalendaryComponent } from './dashboard/calendary/calendary.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PermissionsComponent } from './dashboard/permissions/permissions.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { FooterIniComponent } from './footer-ini/footer-ini.component';
import { NavBarIni2Component } from './nav-bar-ini2/nav-bar-ini2.component';
import { PrincipalComponent } from './main/principal/principal.component';
import { GraficaAireComponent } from './sensores/grafica-aire/grafica-aire.component';
import { GraficaTempComponent } from './sensores/grafica-temp/grafica-temp.component';
import { HistorialComponent } from './historial/historial.component';
import { HisAireComponent } from './historial/his-aire/his-aire.component';
import { HisTempaireComponent } from './historial/his-tempaire/his-tempaire.component';
import { HisHumComponent } from './historial/his-hum/his-hum.component';
import { HisHumsueloComponent } from './historial/his-humsuelo/his-humsuelo.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    GraficaHumComponent,
    GraficaHumSueloComponent,
    GraficaNFCComponent,
    ContactoComponent,
    DashboardComponent,
    AggnotesComponent,
    NotesComponent,
    CalendaryComponent,
    PermissionsComponent,
    FooterIniComponent,
    NavBarIni2Component,
    PrincipalComponent,
    GraficaAireComponent,
    GraficaTempComponent,
    HistorialComponent,
    HisAireComponent,
    HisTempaireComponent,
    HisHumComponent,
    HisHumsueloComponent





  ],
  imports: [

    NgxChartsModule,
    CommonModule,
    TablasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    PaginationModule

  ]

  })

export class TablasModule { }
