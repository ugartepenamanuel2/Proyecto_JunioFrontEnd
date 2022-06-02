import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  // Creamos una array para quer llegue todos los datos de la base de datos //
listCliente: Cliente[] = [];



  constructor(private _clienteService: ClienteService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.listarCliente();
  }


  listarCliente() {
// Llamamos al servicio y le pedimos todos los clientes//
    this._clienteService.getCliente().subscribe(data => {
      // El array es igual a data que son todos los cliente, que lo recorremos en el html//
      this.listCliente=data;
      console.log(this.listCliente)
    }, error => {
      console.log(error);
    })
    }



// Pasamos un dni del html//
    eliminarCliente(dni :any) {
      // Buscamos y lo elimina //
      this._clienteService.eliminarCliente(dni).subscribe(data => {
      this.toastr.error('El cliente fue eliminado correctamente', 'Cliente Eliminado');
      this.listarCliente();
  }, error => {
    console.log(error);
  })
  }






}
