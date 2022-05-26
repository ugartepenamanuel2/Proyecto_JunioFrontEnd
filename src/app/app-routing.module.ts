import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { CrearVentaComponent } from './components/crear-venta/crear-venta.component';
import { HomeComponent } from './components/home/home.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';


//Componentes

import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ListarVentaComponent } from './components/listar-venta/listar-venta.component';


const routes: Routes = [

  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  {path: 'listar-producto', component: ListarProductoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listar-cliente', component: ListarClienteComponent},
  {path: 'listar-venta', component: ListarVentaComponent},
  {path: 'listar-empleado', component: ListarEmpleadoComponent},
  {path: 'editar-cliente/:dni', component: CrearClienteComponent},
  {path: 'editar-venta/:cod_compra', component: CrearVentaComponent},
  {path: 'editar-empleado/:dni', component: CrearEmpleadoComponent},
  {path: 'crear-cliente', component: CrearClienteComponent},
  {path: 'crear-venta', component: CrearVentaComponent},
  {path: 'crear-empleado', component: CrearEmpleadoComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
