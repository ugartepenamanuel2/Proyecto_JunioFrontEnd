import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tEmpleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  titulo = 'Crear empleado';
  dni: string | null;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService, 
    private _empleadoService: EmpleadoService,
    private aRouter: ActivatedRoute) {
    this.empleadoForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      especialidades: ['', Validators.required],
      sueldo: ['', Validators.required],
      

    })
    this.dni = this.aRouter.snapshot.paramMap.get('dni');
  }

  ngOnInit(): void {
  }

  agregarEmpleado() {

    console.log(this.empleadoForm)

    const EMPLEADO: tEmpleado = {
      dni: this.empleadoForm.get('dni')?.value,
      nombre: this.empleadoForm.get('nombre')?.value,
      edad: this.empleadoForm.get('edad')?.value,
      especialidades: this.empleadoForm.get('especialidades')?.value,
      sueldo: this.empleadoForm.get('sueldo')?.value,
      
    };




}



}
