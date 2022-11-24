import { Component } from '@angular/core';
import { ModeloProducto } from 'src/app/Modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent {

  listadoRegistros: ModeloProducto[] = [];

  constructor(private productoServicio: ProductoService) {

  }

  ngOnInit(): void {

  }

  ObtenerListadoProductos(){
    this.productoServicio.ObtenerRegistros().subscribe((datos:ModeloProducto[]) =>{
        this.listadoRegistros = datos;
    })
  }
}
