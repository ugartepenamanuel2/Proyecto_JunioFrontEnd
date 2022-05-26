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
  titulo = 'Crear venta';
  cod_compra: string | null;

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
    this.cod_compra = this.aRouter.snapshot.paramMap.get('cod_compra');
  }

  ngOnInit(): void {
  }


  agregarVenta() {

    console.log(this.ventaForm)

    const VENTA: tVenta = {
      cod_compra: this.ventaForm.get('cod_compra')?.value,
      comprador: this.ventaForm.get('comprador')?.value,
      vendedor: this.ventaForm.get('vendedor')?.value,
      producto: this.ventaForm.get('producto')?.value,
      precio: this.ventaForm.get('precio')?.value,
      
    };

}



}