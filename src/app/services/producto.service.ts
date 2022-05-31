import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tMovil, tPortatil, tProducto, tSobremesa } from '../models/producto';

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



//Sobremesa//
crearSobremesa(SOBREMESA: tSobremesa): Observable<any> {

  return this.http.post(this.url + '/producto/crearSobremesa' , SOBREMESA);
}

editarSobremesa(codProducto: string, SOBREMESA: tSobremesa):Observable<any>{
  return this.http.put(this.url + '/editarSobremesa/' + codProducto, SOBREMESA);
}




//Movil//

crearMovil(MOVIL: tMovil): Observable<any> {

  return this.http.post(this.url + '/producto/crearMovil' , MOVIL);
}

crearPortatil(PORTATIL: tPortatil): Observable<any> {

  return this.http.post(this.url + '/producto/crearPortatil' , PORTATIL);
}

obtenerProducto(codProducto: String): Observable<any> {
  return this.http.get(this.url + '/verProducto/' + codProducto);
}

editarMovil(codProducto: string, MOVIL: tMovil):Observable<any>{
  return this.http.put(this.url + '/editarMovil/' + codProducto, MOVIL);
}

editarPortatil(codProducto: string, PORTATIL: tPortatil):Observable<any>{
  return this.http.put(this.url + '/editarMovil/' + codProducto, PORTATIL);
}



}
