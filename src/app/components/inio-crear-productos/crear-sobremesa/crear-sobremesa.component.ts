import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tProducto, tSobremesa } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-crear-sobremesa',
  templateUrl: './crear-sobremesa.component.html',
  styleUrls: ['./crear-sobremesa.component.css']
})
export class CrearSobremesaComponent implements OnInit {
  productoSobremesaForm: FormGroup;
  titulo = 'Crear sobremesa';
  codProducto: string | null;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute) { 


      this.productoSobremesaForm = this.fb.group({
        codProducto: ['', Validators.required],
        nombre: ['', Validators.required],
        modelo: ['', Validators.required],
        categoria: ['', Validators.required],
        gama: ['', Validators.required],
        precio: ['', Validators.required],
        tipoPlaca: ['', Validators.required],
  
      })
      this.codProducto = this.aRouter.snapshot.paramMap.get('codProducto');

    }

  ngOnInit(): void {
    this.editSobremesa();
  }

  agregarProductoSobremesa(){
    const SOBREMESA: tSobremesa = {
      codProducto: this.productoSobremesaForm.get('codProducto')?.value,
      nombre: this.productoSobremesaForm.get('nombre')?.value,
      modelo: this.productoSobremesaForm.get('modelo')?.value,
      categoria: this.productoSobremesaForm.get('categoria')?.value,
      gama: this.productoSobremesaForm.get('gama')?.value,
      precio: this.productoSobremesaForm.get('precio')?.value,
      tipoPlaca: this.productoSobremesaForm.get('tipoPlaca')?.value,
    };

    
    if (this.codProducto !== null) {
      this._productoService
        .editarSobremesa(this.codProducto, SOBREMESA)
  
        .subscribe((data) => {
          console.log(SOBREMESA);
          this.toastr.success('Sobremesa editado con exito !!');
          this.router.navigate(['/listar-producto']);
        });
       
    } else {
      this._productoService
        .crearSobremesa(SOBREMESA)
        .subscribe((data) => {
          this.toastr.success('Sobremesa creado con exito !!');
          this.router.navigate(['/listar-producto']);
        });
        
    }
}

editSobremesa() {
  if (this.codProducto !== null) {
    this.titulo = 'Editar Sobremesa';
    this._productoService
      .obtenerProducto(this.codProducto)
      .subscribe((data) => {
        console.log(data)
        this.productoSobremesaForm.setValue({
        codProducto: data._codProducto,
        nombre: data._nombre,
        modelo: data._modelo,
        categoria: data._categoria,
        gama:data._gama,
        precio: data._precio,
        tipoPlaca: data._tipoPlaca
        });
      });
  }
}

  }
