import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';

import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { CrearVentaComponent } from './components/crear-venta/crear-venta.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HomeComponent } from './components/home/home.component';
import { CrearDependienteComponent } from './components/inio-crear-empleados/crear-dependiente/crear-dependiente.component';
import { CrearInformaticoComponent } from './components/inio-crear-empleados/crear-informatico/crear-informatico.component';
import { InioCrearEmpleadosComponent } from './components/inio-crear-empleados/inio-crear-empleados.component';
import { CrearMovilComponent } from './components/inio-crear-productos/crear-movil/crear-movil.component';
import { CrearPortatilComponent } from './components/inio-crear-productos/crear-portatil/crear-portatil.component';
import { CrearSobremesaComponent } from './components/inio-crear-productos/crear-sobremesa/crear-sobremesa.component';
import { InioCrearProductosComponent } from './components/inio-crear-productos/inio-crear-productos.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';


//Componentes

import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ListarVentaComponent } from './components/listar-venta/listar-venta.component';


const routes: Routes = [

  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'inicio-crear-productos', component: InioCrearProductosComponent},
  {path: 'inicio-crear-empleados', component: InioCrearEmpleadosComponent},
  {path: 'crear-sobremesa', component: CrearSobremesaComponent},
  {path: 'crear-portatil', component: CrearPortatilComponent},
  {path: 'crear-movil', component: CrearMovilComponent},
  {path: 'editar-movil/:codProducto', component: CrearMovilComponent},
  {path: 'editar-portatil/:codProducto', component: CrearPortatilComponent},
  {path: 'editar-sobremesa/:codProducto', component: CrearSobremesaComponent},
  {path: 'editar-informatico/:dni', component: CrearInformaticoComponent},
  {path: 'editar-dependiente/:dni', component: CrearDependienteComponent},
  {path: 'listar-producto', component: ListarProductoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listar-cliente', component: ListarClienteComponent},
  {path: 'listar-venta', component: ListarVentaComponent},
  {path: 'listar-empleado', component: ListarEmpleadoComponent},
  {path: 'editar-cliente/:dni', component: CrearClienteComponent},
  {path: 'editar-venta/:_cod_compra', component: CrearVentaComponent},
  {path: 'estadistica', component: EstadisticasComponent},
  {path: 'crear-cliente', component: CrearClienteComponent},
  {path: 'crear-venta', component: CrearVentaComponent},

  {path: 'crear-informatico', component: CrearInformaticoComponent},
  {path: 'crear-dependiente', component: CrearDependienteComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
