export class Venta {
    public _cod_compra:number;
    public _comprador:string;
    public _vendedor:string;
    public _producto:string;
    public _precio:number;
    
    
    constructor(
       cod_compra:number,comprador:string,vendedor:string,producto:string,precio:number
        ){
            this._cod_compra=cod_compra;
            this._comprador=comprador;
            this._vendedor=vendedor;
            this._producto=producto;
            this._precio=precio;
           
        }
}

export type tVenta = {
    cod_compra:number,
    comprador: string,
    vendedor: string,
    producto: string,
    precio: number
}