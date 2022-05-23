import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tProducto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

getProductos(): Observable<any> {
  return this.http.get(this.url + '/producto/listarProducto/');
}

eliminarProductos(id: String): Observable<any> {

  return this.http.delete(this.url + '/producto/borrarProducto/' + id);

}

guardarProducto(PRODUCTO: tProducto): Observable<any> {

  return this.http.post(this.url + '/producto/crearProducto' , PRODUCTO);


}



}
