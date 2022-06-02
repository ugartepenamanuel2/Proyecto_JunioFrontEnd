import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

//Componentes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { HomeComponent } from './components/home/home.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
import { CrearVentaComponent } from './components/crear-venta/crear-venta.component';
import { ListarVentaComponent } from './components/listar-venta/listar-venta.component';
import { InioCrearProductosComponent } from './components/inio-crear-productos/inio-crear-productos.component';
import { NavComponent } from './components/nav/nav.component';
import { CrearSobremesaComponent } from './components/inio-crear-productos/crear-sobremesa/crear-sobremesa.component';
import { CrearPortatilComponent } from './components/inio-crear-productos/crear-portatil/crear-portatil.component';
import { CrearMovilComponent } from './components/inio-crear-productos/crear-movil/crear-movil.component';
import { InioCrearEmpleadosComponent } from './components/inio-crear-empleados/inio-crear-empleados.component';
import { CrearInformaticoComponent } from './components/inio-crear-empleados/crear-informatico/crear-informatico.component';
import { CrearDependienteComponent } from './components/inio-crear-empleados/crear-dependiente/crear-dependiente.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    HomeComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    CrearEmpleadoComponent,
    ListarEmpleadoComponent,
    CrearVentaComponent,
    ListarVentaComponent,
    InioCrearProductosComponent,
    NavComponent,
    CrearSobremesaComponent,
    CrearPortatilComponent,
    CrearMovilComponent,
    InioCrearEmpleadosComponent,
    CrearInformaticoComponent,
    CrearDependienteComponent,
    EstadisticasComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ChartModule
  

  ],
  providers: [{provide:
    APP_BASE_HREF, useValue: '/home'}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
