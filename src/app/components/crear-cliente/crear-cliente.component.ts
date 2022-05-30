import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tCliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  titulo = 'Crear cliente';
  dni: string | null;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService, 
    private _clienteService: ClienteService,
    private aRouter: ActivatedRoute) {
    this.clienteForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      

    })
    this.dni = this.aRouter.snapshot.paramMap.get('dni');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCliente() {

    console.log(this.clienteForm)

    const CLIENTE: tCliente = {
      dni: this.clienteForm.get('dni')?.value,
      nombre: this.clienteForm.get('nombre')?.value,
      edad: this.clienteForm.get('edad')?.value,
      
      
    };

    this._clienteService.guardarCliente(CLIENTE).subscribe( data => {
      this.toastr.success('Este cliente fue registrado con exito', 'El cliente fue registrado');
      this.router.navigate(['/listar-cliente']);
    
    })


}

esEditar() {
  if (this.dni !==  null) {
    this.titulo = 'Editar Cliente';
    
    this._clienteService.obtenerCliente(this.dni).subscribe((data) => {
      console.log(data)
        this.clienteForm.setValue({
          dni:data._dni,
          nombre: data._nombre,
          edad: data._edad
          
        });
      });
  }
}


}
