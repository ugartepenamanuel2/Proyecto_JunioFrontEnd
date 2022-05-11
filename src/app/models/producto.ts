export class Producto {
    _id?: number;
    nombre: string;
    modelo: string;
    categoria: string;
    gama: string;
    precio: number;

    constructor(nombre: string, modelo: string, categoria: string, gama: string, precio: number )
{
    this.nombre = nombre;
    this.modelo = modelo;
    this.categoria = categoria;
    this.gama = gama;
    this.precio = precio;
}
}