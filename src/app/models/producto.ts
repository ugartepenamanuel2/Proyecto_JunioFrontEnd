export class Producto {
    id: number;
    nombre: string;
    modelo: string;
    categoria: string;
    gama: string;
    precio: number;

    constructor(id: number, nombre: string, modelo: string, categoria: string, gama: string, precio: number ){
    this.id = id;
    this.nombre = nombre;
    this.modelo = modelo;
    this.categoria = categoria;
    this.gama = gama;
    this.precio = precio;
}
}