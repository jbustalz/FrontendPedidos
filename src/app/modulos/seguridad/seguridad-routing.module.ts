import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';

const routes: Routes = [
  {
    path: "cerrarSesion",
    component: CerrarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
