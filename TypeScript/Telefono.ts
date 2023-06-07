

export class Telefono {
    //Declaracion de variables
    private _Tipo: String;
    private _Numero: String;

    //Constructor de la clase
    constructor(Tipo, Numero) {
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
   
    public get Numero(): String {
        return this._Numero;
    }
    public set Numero(value: String) {
        this._Numero = value;
    }       

}

