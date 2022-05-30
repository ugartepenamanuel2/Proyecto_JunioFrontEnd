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
listCliente: Cliente[] = [];



  constructor(private _clienteService: ClienteService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.listarCliente();
  }


  listarCliente() {

    this._clienteService.getCliente().subscribe(data => {
      this.listCliente=data;
      console.log(this.listCliente)
    }, error => {
      console.log(error);
    })
    }




    eliminarCliente(dni :any) {
      this._clienteService.eliminarCliente(dni).subscribe(data => {
      this.toastr.error('El cliente fue eliminado correctamente', 'Cliente Eliminado');
      this.listarCliente();
  }, error => {
    console.log(error);
  })
  }






}
