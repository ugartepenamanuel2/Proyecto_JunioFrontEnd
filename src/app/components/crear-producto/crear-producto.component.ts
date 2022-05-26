import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  titulo = 'Crear producto';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      modelo: ['', Validators.required],
      categoria: ['', Validators.required],
      gama: ['', Validators.required],
      precio: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }


  agregarProducto() {

    console.log(this.productoForm)


    const PRODUCTO: tProducto = {
      id: this.productoForm.get('id')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      modelo: this.productoForm.get('modelo')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      gama: this.productoForm.get('gama')?.value,
      precio: this.productoForm.get('precio')?.value,
    };



    this._productoService.guardarProducto(PRODUCTO).subscribe(data =>  {
      
    })
    this.toastr.success('Este producto fue registrado con exito', 'El producto fue registrado');
      this.router.navigate(['/listar-producto']);

  }


  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto';
      this._productoService.obtenerProducto(this.id).subscribe((data) => {
          this.productoForm.setValue({
            id:data.id,
            nombre: data.nombre,
            modelo: data.modelo,
            categoria: data.categoria,
            gama: data.gama,
            precio: data.precio
          });
        });
    }
  }



}
