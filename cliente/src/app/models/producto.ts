export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    gama: string;
    precio: number;

    constructor(nombre: string, categoria: string, gama: string, precio: number )
{
    this.nombre = nombre;
    this.categoria = categoria;
    this.gama = gama;
    this.precio = precio;
}
}