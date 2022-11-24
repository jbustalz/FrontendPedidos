import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/Modelos/identificar.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();
  fgValidador: FormGroup = this.fb.group({
    "usuario": ["", [Validators.required, Validators.email]],
    "clave": ["", [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService, private router: Router) {}

  ngOnInit(): void {
    
    this.subs = this.servicioSeguridad.ObtenerDatosUsuarioSesion().subscribe((datos:ModeloIdentificar) =>{
    this.seInicioSesion = datos.estaIdentificado;
    })
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) =>{
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    }, (error:any) => {
      alert(`Datos Invalidos`)
    })
  }

}
