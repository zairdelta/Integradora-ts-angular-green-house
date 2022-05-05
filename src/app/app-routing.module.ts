import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { ContactoinicioComponent } from './componentes/contactoinicio/contactoinicio.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';

const routes: Routes = [
  {path:'contacto',component:ContactoinicioComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'ini',
  loadChildren:()=>import('./componentes/tablas.module').then(m=>m.TablasModule)
  },
  {path:'**',redirectTo:'/welcome'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
