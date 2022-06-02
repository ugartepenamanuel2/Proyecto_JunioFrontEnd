import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tDependiente, tEmpleado, tInformatico } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  crearInformatico(INFORMATICO: tInformatico): Observable<any> {

    return this.http.post(this.url + '/empleado/crearInformatico' , INFORMATICO);
  }

  crearDependiente(DEPENDIENTE: tDependiente): Observable<any> {

    return this.http.post(this.url + '/empleado/crearDependiente' , DEPENDIENTE);
  }

  editarDependiente(dni: string,  DEPENDIENTE: tDependiente ):Observable<any>{
    return this.http.put(this.url + '/empleado/editarDependiente/' + dni, DEPENDIENTE);
  }



  editarInformatico(dni: string,  INFORMATICO: tInformatico ):Observable<any>{
    return this.http.put(this.url + '/empleado/editarInformatico/' + dni, INFORMATICO);
  }


  obtenerEmpleadoSueldo(): Observable<any> {
    return this.http.get(this.url + '/calculoSueldoEmpleados' );
  }

  obtenerEmpleado(): Observable<any> {
    return this.http.get(this.url + '/listarEmpleado/' );
  }



  obtenerUnEmpleado(dni: String): Observable<any> {
    return this.http.get(this.url + '/listarEmpleado/' + dni);
  }




  eliminarEmpleado(dni: String): Observable<any> {

    return this.http.delete(this.url + '/borrarEmpleado/' + dni);
  
  }

}
