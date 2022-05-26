export class Cliente {
    private _dni:string;
    private _nombre:string;
    private _edad:number;
   
    
    
    constructor(
       dni:string,nombre:string,edad:number
        ){
            this._dni=dni;
            this._nombre=nombre;
            this._edad=edad;
           
        }
}

export type tCliente = {
    dni:string,
    nombre: string,
    edad: number,
   
}