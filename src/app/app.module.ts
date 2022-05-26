import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
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
    ListarVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
