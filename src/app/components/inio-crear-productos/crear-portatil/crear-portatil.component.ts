import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tPortatil } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-portatil',
  templateUrl: './crear-portatil.component.html',
  styleUrls: ['./crear-portatil.component.css']
})
export class CrearPortatilComponent implements OnInit {
  productoPortatilForm: FormGroup;
  titulo = 'Crear portatil';
  codProducto: string | null;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute) { 
      this.productoPortatilForm = this.fb.group({
        codProducto: ['', Validators.required],
        nombre: ['', Validators.required],
        modelo: ['', Validators.required],
        categoria: ['', Validators.required],
        gama: ['', Validators.required],
        precio: ['', Validators.required],
        bateria: ['', Validators.required],
  
      })
      this.codProducto = this.aRouter.snapshot.paramMap.get('codProducto');
    }

  ngOnInit(): void {
    this.editPortatil();
  }

  agregarProductoPortatil(){
    const PORTATIL: tPortatil = {
      codProducto: this.productoPortatilForm.get('codProducto')?.value,
      nombre: this.productoPortatilForm.get('nombre')?.value,
      modelo: this.productoPortatilForm.get('modelo')?.value,
      categoria: this.productoPortatilForm.get('categoria')?.value,
      gama: this.productoPortatilForm.get('gama')?.value,
      precio: this.productoPortatilForm.get('precio')?.value,
      bateria: this.productoPortatilForm.get('bateria')?.value,
    };

    if (this.codProducto !== null) {
      this._productoService
        .editarPortatil(this.codProducto, PORTATIL)
        .subscribe((data) => {
          this.toastr.success('Portatil editado con exito !!');
          this.router.navigate(['/listar-producto']);
        });
       
    } else {
      this._productoService
        .crearPortatil(PORTATIL)
        .subscribe((data) => {
          this.toastr.success('Portatil creado con exito !!');
          this.router.navigate(['/listar-producto']);
        });
        
    }
}

editPortatil() {
  if (this.codProducto !== null) {
    this.titulo = 'Editar Portatil';
    this._productoService
      .obtenerProducto(this.codProducto)
      .subscribe((data) => {
        console.log(data)
        this.productoPortatilForm.setValue({
        codProducto: data._codProducto,
        nombre: data._nombre,
        modelo: data._modelo,
        categoria: data._categoria,
        gama:data._gama,
        precio: data._precio,
        bateria: data._bateria,
        });
      });
  }
}

  }
