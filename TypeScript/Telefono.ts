

export class Telefono {
    //Declaracion de variables
    private _Tipo: String;
    private _Numero: number;

    //Constructor de la clase
    constructor(Tipo:String, Numero:number) {
        this._Numero = Numero;
        this._Tipo = Tipo;
    }
    
    //get y set de las variables
    public get Tipo(): String {
        return this._Tipo;
    }
    public set Tipo(value: String) {
        this._Tipo = value;
    }
   
    public get Numero(): number {
        return this._Numero;
    }
    public set Numero(value: number) {
        this._Numero = value;
    }       

}

