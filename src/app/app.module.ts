import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ErrorComponent } from './pages/error/error.component';
import {AppRoutingModule } from './app-routing/app-routing.module';
import { AcercadeluisComponent } from './pages/acercadeluis/acercadeluis.component';
import { ContactoluisComponent } from './pages/contactoluis/contactoluis.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    AcercadeComponent,
    ErrorComponent,
    AcercadeluisComponent,
    ContactoluisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
