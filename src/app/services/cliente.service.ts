import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tCliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCliente(): Observable<any> {
    return this.http.get(this.url + '/cliente/listarCliente');

  }

  eliminarCliente(dni: string): Observable<any> {

    return this.http.delete(this.url + '/cliente/borrarCliente/' + dni);
}


guardarCliente(CLIENTE: tCliente): Observable<any> {

  return this.http.post(this.url + '/cliente/crearCliente' , CLIENTE);
}


obtenerCliente(dni: string): Observable<any> {

  return this.http.get(this.url + '/cliente/listarClientes/' + dni);

}


editCliente(dni: string, CLIENTE: tCliente):Observable<any>{
  return this.http.put(this.url + '/cliente/editarCliente/' + dni, CLIENTE);
}


}
