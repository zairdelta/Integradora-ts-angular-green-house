import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoginComponent } from './componentes/auth/login/login.component';
import { ContactoinicioComponent } from './componentes/contactoinicio/contactoinicio.component';
import { FooterComponent } from './componentes/footer/footer.component';
// import { PrincipalComponent } from './componentes/main/principal/principal.component';
import { NavBarIniComponent } from './componentes/nav-bar-ini/nav-bar-ini.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { VigilanteGuard } from './vigilante.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactoinicioComponent,
    WelcomeComponent,
    NavBarIniComponent,
    FooterComponent,
    // PrincipalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    VigilanteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
