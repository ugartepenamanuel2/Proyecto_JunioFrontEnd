export class Producto {
    private _id:string;
    private _nombre:string;
    private _modelo:string;
    private _categoria:string;
    private _gama:string;
    private _precio:number;
    
    
    constructor(
       id:string,nombre:string,modelo:string,categoria:string,gama:string,precio:number
        ){
            this._id=id;
            this._nombre=nombre;
            this._modelo=modelo;
            this._categoria=categoria;
            this._gama=gama;
            this._precio=precio;
        }
}


export type tProducto = {
    id:number,
    nombre: string,
    modelo: string,
    categoria: string,
    gama: string,
    precio: number
}