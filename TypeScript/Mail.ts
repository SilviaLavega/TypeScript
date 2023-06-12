//Creacion de un enum con los tipos de mail que se pueden introducir al constructor
export enum TipoMail {
    gmail = 'gmail',
    hotmail = 'hotmail',
    outlook = 'outlook'
}

export class Mail {
    //Creacion de las variables
    private _Tipo: TipoMail;
    private _Direccion: String;

    //Creacion del constructor
    constructor(Tipo:TipoMail, Direccion:String) {
        this._Direccion = Direccion;
        this._Tipo = Tipo;
    }
    
    //Creacion de los set y get de las varibles
    public get Tipo(): TipoMail {
        return this._Tipo;
    }
    public set Tipo(value: TipoMail) {
        this._Tipo = value;
    }

    public get Direccion(): String {
        return this._Direccion;
    }
    public set Direccion(value: String) {
        this._Direccion = value;
    }
    

}

