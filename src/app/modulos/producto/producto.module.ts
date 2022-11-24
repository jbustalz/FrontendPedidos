import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';


@NgModule({
  declarations: [
    BuscarProductoComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
