import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
 

  constructor(private fb: FormBuilder,
  private router: Router, private toastr: ToastrService  ) {
    this.productoForm = this.fb.group({
      id: ['', Validators.required],
      producto: ['', Validators.required],
      modelo: ['', Validators.required],
      categoria: ['', Validators.required],
      gama: ['', Validators.required],
      precio: ['', Validators.required],

    })
   }

  ngOnInit(): void {
    
  }


  agregarProducto() {

   console.log(this.productoForm)
  

    const PRODUCTO: Producto = {
      id: this.productoForm.get('id')?.value,
      nombre: this.productoForm.get('producto')?.value,
      modelo: this.productoForm.get('modelo')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      gama: this.productoForm.get('gama')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    console.log(PRODUCTO);
    this.toastr.info('Este producto fue registrado con exito', 'El producto fue registrado');
    this.router.navigate(['/'])
  }

}
