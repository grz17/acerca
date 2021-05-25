import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { AcercadeComponent } from '../pages/acercade/acercade.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { ErrorComponent } from '../pages/error/error.component';


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
    path:'error',
    component: ErrorComponent
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
