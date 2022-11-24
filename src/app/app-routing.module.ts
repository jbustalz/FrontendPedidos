import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path:"seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path:"producto",
    loadChildren: () => import("./modulos/producto/producto.module").then(x=>x.ProductoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
