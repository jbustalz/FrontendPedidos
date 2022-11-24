import { Component } from '@angular/core';
import { ModeloProducto } from 'src/app/Modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

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
