import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from '../Modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = `http://localhost:300`;
  token: String = ``;

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloProducto[]>{
    return this.http.get<ModeloProducto[]>(`${this.url}/productos-servicios`);

  }

  CrearProducto(producto: ModeloProducto): Observable<ModeloProducto>{
    return this.http.post<ModeloProducto>(`${this.url}/productos-servicios`,producto, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  ActualizarProducto(producto: ModeloProducto): Observable<ModeloProducto>{
    return this.http.put<ModeloProducto>(`${this.url}/productos-servicios`,producto, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  EliminarProducto(id: String): Observable<any>{
    return this.http.delete(`${this.url}/productos-servicios/$(id)`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
}
