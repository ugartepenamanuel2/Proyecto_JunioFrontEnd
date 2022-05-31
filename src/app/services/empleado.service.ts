import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tEmpleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  crearInformatico(INFORMATICO: tEmpleado): Observable<any> {

    return this.http.post(this.url + '/empleado/crearInformatico' , INFORMATICO);
  }

  editarInformatico(dni: string, SOBREMESA: tEmpleado):Observable<any>{
    return this.http.put(this.url + '/empleado/editarInformatico' + dni, SOBREMESA);
  }
}
