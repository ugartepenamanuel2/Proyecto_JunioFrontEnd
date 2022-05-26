import { Component, OnInit } from '@angular/core';
import { tVenta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {
listVenta: tVenta[] = [];

  constructor(private _ventaService: VentaService) { }

  ngOnInit(): void {
    this.listarVenta();
  }




listarVenta() {

  this._ventaService.getVenta().subscribe(data => {
    this.listVenta=(data);
  }, error => {
    console.log(error);
  })
  }
  
}
