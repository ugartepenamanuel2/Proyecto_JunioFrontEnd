import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { HomeComponent } from './components/home/home.component';


//Componentes

import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  {path: 'listar-producto', component: ListarProductoComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
