import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tProducto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  listProducto: tProducto[] = [];
  

  constructor(private _productoService : ProductoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listarProducto();
  }

  listarProducto() {

    this._productoService.getProductos().subscribe(data => {
      this.listProducto=(data);
    }, error => {
      console.log(error);
    })
    }

    eliminarProducto(codProducto:any) {

this._productoService.eliminarProductos(codProducto).subscribe(data => {
  this.toastr.error('El producto fue eliminado correctamente', 'Producto Eliminado');
  this.listarProducto();
}, error => {
  console.log(error);
})





    }
}
