import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';

const routes: Routes = [
  {
    path: "productos",
    component: BuscarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
