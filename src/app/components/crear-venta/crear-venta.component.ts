import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tVenta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';


@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {
  ventaForm: FormGroup;
  titulo = 'Crear Venta';
  codigo: any | null;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService, 
    private _ventaService: VentaService,
    private aRouter: ActivatedRoute) {
    this.ventaForm = this.fb.group({
      cod_compra: ['', Validators.required],
      comprador: ['', Validators.required],
      vendedor: ['', Validators.required],
      producto: ['', Validators.required],
      precio: ['', Validators.required],
      

    })
    this.codigo = this.aRouter.snapshot.paramMap.get('_cod_compra');
  }

  ngOnInit(): void {
    this.esEditar();
  }


  agregarVenta() {


    const VENTA: tVenta = {
      cod_compra: this.ventaForm.get('cod_compra')?.value,
      comprador: this.ventaForm.get('comprador')?.value,
      vendedor: this.ventaForm.get('vendedor')?.value,
      producto: this.ventaForm.get('producto')?.value,
      precio: this.ventaForm.get('precio')?.value,
      
    };
    
    
    
    if (this.codigo !== null) {
      this._ventaService
        .editVenta(this.codigo, VENTA)
        .subscribe((data) => {
          this.toastr.info('Venta fue editado correctamente !!');
          this.router.navigate(['/listar-venta']);
        });
    } else {
      this._ventaService
        .guardarVenta(VENTA)
        .subscribe((data) => {
          this.toastr.success('Venta creada con exito !!');
          this.router.navigate(['/listar-venta']);
        });
    }
   
  
}

esEditar() {
  if (this.codigo !==  null) {
    this.titulo = 'Editar Venta';
    
    this._ventaService.obtenerVenta(this.codigo).subscribe((data) => {
      console.log(data)
        this.ventaForm.setValue({
          cod_compra:data._cod_compra,
          comprador: data._comprador,
          vendedor: data._vendedor,
          producto: data._producto,
          precio: data._precio
        });
      });
  }
}



}