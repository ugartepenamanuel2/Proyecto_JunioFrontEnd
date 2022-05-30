import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tVenta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
 
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getVenta(): Observable<any> {
    return this.http.get(this.url + '/venta/listarVentas');

  }

  eliminarVenta(cod_compra: number): Observable<any> {

    return this.http.delete(this.url + '/venta/borrarVenta/' + cod_compra);
}


guardarVenta(VENTA: tVenta): Observable<any> {

  return this.http.post(this.url + '/venta/crearVenta' , VENTA);
}

obtenerVenta(codigo: number): Observable<any> {

  return this.http.get(this.url + '/venta/listarVenta/' + codigo);

}

editVenta(codigo: number, VENTA: tVenta):Observable<any>{
  return this.http.put(this.url + '/venta/editarVenta/' + codigo, VENTA);
}


}
