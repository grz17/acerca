import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { AcercadeComponent } from '../pages/acercade/acercade.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { ErrorComponent } from '../pages/error/error.component';
import { AcercadeluisComponent } from '../pages/acercadeluis/acercadeluis.component';
import { ContactoluisComponent } from '../pages/contactoluis/contactoluis.component';


const routes:Routes= [
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'acercade',
    component: AcercadeComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'acercadeluis',
    component: AcercadeluisComponent
  },
  {
    path:'contactoluis',
    component: ContactoluisComponent
  },
  {
    path:'error',
    component: ErrorComponent
  },
  {
    path:'',
    redirectTo:'inicio',pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'error'
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
