import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {
  listVenta: Venta[] = [];

  constructor(private _ventaService: VentaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listarVenta();
  }




listarVenta() {

  this._ventaService.getVenta().subscribe(data => {
    this.listVenta=data;
    console.log(this.listVenta)
  }, error => {
    console.log(error);
  })
  }



  eliminarVenta(cod_compra :any) {
    this._ventaService.eliminarVenta(cod_compra).subscribe(data => {
    this.toastr.error('La venta fue eliminada correctamente', 'Venta Eliminada');
    this.listarVenta();
}, error => {
  console.log(error);
})
}

}

  


/*
eliminarProducto(id:any) {

  this._productoService.eliminarProductos(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado correctamente', 'Producto Eliminado');
    this.listarProducto();
  }, error => {
    console.log(error);
  })
  

  this._ventaService.eliminarVenta(cod_compra).subscribe(data =>
*/
