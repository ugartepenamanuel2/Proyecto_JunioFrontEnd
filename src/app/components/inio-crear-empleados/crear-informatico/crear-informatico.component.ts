import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {  tInformatico } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-informatico',
  templateUrl: './crear-informatico.component.html',
  styleUrls: ['./crear-informatico.component.css']
})
export class CrearInformaticoComponent implements OnInit {
  empleadoInformatico: FormGroup;
  titulo = 'Crear Informatico';
  dni: any | null;
  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService, 
    private _empleadoService: EmpleadoService,
    private aRouter: ActivatedRoute) { 

      this.empleadoInformatico = this.fb.group({
        dni: ['', Validators.required],
        nombre: ['', Validators.required],
        edad: ['', Validators.required],
        especialidades: ['', Validators.required],
        sueldo: ['', Validators.required],
        num_reparaciones: ['', Validators.required],
       
    })
    this.dni = this.aRouter.snapshot.paramMap.get('dni');
  }
  ngOnInit(): void {
    this.editarInformatico();
  }

agregarEmpleadoInformatico(){

  const INFORMATICO: tInformatico = {
    dni: this.empleadoInformatico.get('dni')?.value,
    nombre: this.empleadoInformatico.get('nombre')?.value,
    edad: this.empleadoInformatico.get('edad')?.value,
    especialidades: this.empleadoInformatico.get('especialidades')?.value,
    sueldo: this.empleadoInformatico.get('sueldo')?.value,
    num_reparaciones: this.empleadoInformatico.get('num_reparaciones')?.value,

    
  };

  

  if (this.dni !== null) {
    this._empleadoService
      .editarInformatico(this.dni, INFORMATICO)
      .subscribe((data) => {
        this.toastr.info('Informatico fue editado correctamente !!');
        this.router.navigate(['/listar-empleado']);
      });
  } else {
    this._empleadoService
      .crearInformatico(INFORMATICO)
      .subscribe((data) => {
        this.toastr.success('Informatico creada con exito !!');
        this.router.navigate(['/listar-empleado']);
      });
  }

  

}

editarInformatico() {
  if (this.dni !==  null) {
    this.titulo = 'Editar Informatico';
    
    this._empleadoService.obtenerUnEmpleado(this.dni).subscribe((data) => {
      console.log(data)
        this.empleadoInformatico.setValue({
          dni:data._dni,
          nombre: data._nombre,
          edad: data._edad,
          especialidades: data._especialidades,
          sueldo: data._sueldo,
          num_reparaciones: data._num_reparaciones,
         
        });
      });
  }
}

}
