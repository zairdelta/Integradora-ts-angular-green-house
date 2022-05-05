import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from 'src/app/vigilante.guard';
import { CalendaryComponent } from './dashboard/calendary/calendary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionsComponent } from './dashboard/permissions/permissions.component';
import { HistorialComponent } from './historial/historial.component';
import { PrincipalComponent } from './main/principal/principal.component';
import { GraficaHumComponent } from './sensores/grafica-hum/grafica-hum.component';

const routes: Routes = [

  {
    path:'',
    children:[
      {path:"historiales",component:HistorialComponent},
      {path:'graficaTemp',component:GraficaHumComponent},
      {path:'dash',component:DashboardComponent,canActivate:[VigilanteGuard]},
      {path:'inicio',component:PrincipalComponent},
      {path:'**',redirectTo:'inicio'},

    ],canActivateChild:[VigilanteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasRoutingModule { }
