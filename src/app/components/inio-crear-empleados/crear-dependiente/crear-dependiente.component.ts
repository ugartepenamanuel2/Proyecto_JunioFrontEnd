import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';
import {  tDependiente } from 'src/app/models/empleado';

@Component({
  selector: 'app-crear-dependiente',
  templateUrl: './crear-dependiente.component.html',
  styleUrls: ['./crear-dependiente.component.css']
})
export class CrearDependienteComponent implements OnInit {
  empleadoDependiente: FormGroup;
  titulo = 'Crear Dependiente';
  dni: any | null;
  
  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService, 
    private _empleadoService: EmpleadoService,
    private aRouter: ActivatedRoute) {

      this.empleadoDependiente = this.fb.group({
        dni: ['', Validators.required],
        nombre: ['', Validators.required],
        edad: ['', Validators.required],
        especialidades: ['', Validators.required],
        sueldo: ['', Validators.required],
        horario: ['', Validators.required],
       
    })
    this.dni = this.aRouter.snapshot.paramMap.get('dni');

     }

  ngOnInit(): void {
    this.editarDependiente();
  }

  agregarEmpleadoDependiente(){

    const DEPENDIENTE: tDependiente = {
      dni: this.empleadoDependiente.get('dni')?.value,
      nombre: this.empleadoDependiente.get('nombre')?.value,
      edad: this.empleadoDependiente.get('edad')?.value,
      especialidades: this.empleadoDependiente.get('especialidades')?.value,
      sueldo: this.empleadoDependiente.get('sueldo')?.value,
      horario: this.empleadoDependiente.get('horario')?.value,
  
      
    };

    if (this.dni !== null) {
      this._empleadoService
        .editarDependiente(this.dni, DEPENDIENTE)
        .subscribe((data) => {
          this.toastr.info('Dependiente fue editado correctamente !!');
          this.router.navigate(['/listar-empleado']);
        });
    } else {
      this._empleadoService
        .crearDependiente(DEPENDIENTE)
        .subscribe((data) => {
          this.toastr.success('Dependiente creada con exito !!');
          this.router.navigate(['/listar-empleado']);
        });
    }
  }

    editarDependiente() {
      if (this.dni !==  null) {
        this.titulo = 'Editar Dependiente';
        
        this._empleadoService.obtenerUnEmpleado(this.dni).subscribe((data) => {
          console.log(data)
            this.empleadoDependiente.setValue({
              dni:data._dni,
              nombre: data._nombre,
              edad: data._edad,
              especialidades: data._especialidades,
              sueldo: data._sueldo,
              horario: data._horario,
             
            });
          });
      }
    }






}
