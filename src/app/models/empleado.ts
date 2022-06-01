export class Empleado {
    private _dni:string;
    private _nombre:string;
    private _edad:number;
    private _especialidades:string;
    private _sueldo:number;
    
    
    constructor(
       dni:string,nombre:string,edad:number,especialidades:string,sueldo:number
        ){
            this._dni=dni;
            this._nombre=nombre;
            this._edad=edad;
            this._especialidades=especialidades;
            this._sueldo=sueldo;
           
        }


}

export type tEmpleado = {
    dni:string,
    nombre: string,
    edad: number,
    especialidades: string,
    sueldo: number,
    num_reparaciones: string,
    horario: string
}
export type tEmpleado2 = {
    _dni:string,
    _nombre: string,
    _edad: number,
    _especialidades: string,
    _sueldo: number,
    _num_reparaciones: string,
    _horario: string
}

export type tInformatico = {
    dni:string,
    nombre: string,
    edad: number,
    especialidades: string,
    sueldo: number,
    num_reparaciones: string
    
}
export type tDependiente = {
    dni:string,
    nombre: string,
    edad: number,
    especialidades: string,
    sueldo: number,
    horario: string
    
}