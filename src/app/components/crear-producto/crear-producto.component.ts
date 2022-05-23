import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tProducto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService,
    private _productoService: ProductoService) {
    this.productoForm = this.fb.group({
      id: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      categoria: ['', Validators.required],
      gama: ['', Validators.required],
      precio: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.agregarProducto()
  }


  agregarProducto() {

    console.log(this.productoForm)


    const PRODUCTO: tProducto = {
      id: this.productoForm.get('id')?.value,
      nombre: this.productoForm.get('marca')?.value,
      modelo: this.productoForm.get('modelo')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      gama: this.productoForm.get('gama')?.value,
      precio: this.productoForm.get('precio')?.value,
    };



    this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
      
      this.toastr.success('Este producto fue registrado con exito', 'El producto fue registrado');
      this.router.navigate(['/http://localhost:4200/']);
    })
    

  }

}
