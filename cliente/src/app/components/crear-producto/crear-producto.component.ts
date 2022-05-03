import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
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

   

  }

}
