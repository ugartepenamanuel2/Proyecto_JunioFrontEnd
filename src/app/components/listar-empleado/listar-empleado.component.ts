import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tEmpleado, tEmpleado2 } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  listEmpleado: tEmpleado2[] = [];

  constructor(private _empleadoService: EmpleadoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listarEmpleado();
  }

  listarEmpleado() {

    this._empleadoService.obtenerEmpleado().subscribe(data => {
      this.listEmpleado = (data);
    }, error => {
      console.log(error);
    })
  }

  eliminarEmpleado(dni: any) {

    this._empleadoService.eliminarEmpleado(dni).subscribe(data => {
      this.toastr.error('El producto fue eliminado correctamente', 'Empleado Eliminado');
      this.listarEmpleado();
    }, error => {
      console.log(error);
    })





  }





}



