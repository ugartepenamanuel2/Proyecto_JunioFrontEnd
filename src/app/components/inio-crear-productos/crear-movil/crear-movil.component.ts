import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tMovil } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-movil',
  templateUrl: './crear-movil.component.html',
  styleUrls: ['./crear-movil.component.css']
})
export class CrearMovilComponent implements OnInit {
  productoMovilForm: FormGroup;
  titulo = 'Crear movil';
  codProducto: string | null;
// contructor : formulario, rutas, mensajes de info, servicios y rutas activas //
  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute) { 
      this.productoMovilForm = this.fb.group({
        codProducto: ['', Validators.required],
        nombre: ['', Validators.required],
        modelo: ['', Validators.required],
        categoria: ['', Validators.required],
        gama: ['', Validators.required],
        precio: ['', Validators.required],
        pantalla: ['', Validators.required],
  
      })
      // Obtenemos cod_Producto que le estamos pasando //
      this.codProducto = this.aRouter.snapshot.paramMap.get('codProducto');
    }

// Para ver la función que se va iniciar  primero   //

  ngOnInit(): void {
    this.editMovil();
  }

  agregarProductoMovil(){
    const MOVIL: tMovil = {
      codProducto: this.productoMovilForm.get('codProducto')?.value,
      nombre: this.productoMovilForm.get('nombre')?.value,
      modelo: this.productoMovilForm.get('modelo')?.value,
      categoria: this.productoMovilForm.get('categoria')?.value,
      gama: this.productoMovilForm.get('gama')?.value,
      precio: this.productoMovilForm.get('precio')?.value,
      pantalla: this.productoMovilForm.get('pantalla')?.value,
    };
 // Si producto está vacío no entra y va a la otra //
    if (this.codProducto !== null) {
      this._productoService
        .editarMovil(this.codProducto, MOVIL)
        .subscribe((data) => {
          this.toastr.success('Movil editado con exito !!');
          this.router.navigate(['/listar-producto']);
        });
       // Crear el movil//
    } else {
      this._productoService
        .crearMovil(MOVIL)
        .subscribe((data) => {
          // Mensaje de Info//
          this.toastr.success('Movil creado con exito !!');
          this.router.navigate(['/listar-producto']);
        });
        
    }
}


// Editar Movil //

editMovil() {
  // Si producto está vacío no entra y va a la otra //
  if (this.codProducto !== null) {
    // Cambiamos el titulo //
    this.titulo = 'Editar Movil';
    this._productoService

  // Le pedimos un solo producto //
      .obtenerProducto(this.codProducto)
      .subscribe((data) => {
        console.log(data)
        // Le pasamos los datos al formulario //
        this.productoMovilForm.setValue({
        codProducto: data._codProducto,
        nombre: data._nombre,
        modelo: data._modelo,
        categoria: data._categoria,
        gama:data._gama,
        precio: data._precio,
        pantalla: data._pantalla,
        });
      });
  }
}

  }
