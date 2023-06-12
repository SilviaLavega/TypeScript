"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = exports.TipoMail = void 0;
//Creacion de un enum con los tipos de mail que se pueden introducir al constructor
var TipoMail;
(function (TipoMail) {
    TipoMail["gmail"] = "gmail";
    TipoMail["hotmail"] = "hotmail";
    TipoMail["outlook"] = "outlook";
})(TipoMail || (exports.TipoMail = TipoMail = {}));
class Mail {
    //Creacion del constructor
    constructor(Tipo, Direccion) {
        this._Direccion = Direccion;
        this._Tipo = Tipo;
    }
    //Creacion de los set y get de las varibles
    get Tipo() {
        return this._Tipo;
    }
    set Tipo(value) {
        this._Tipo = value;
    }
    get Direccion() {
        return this._Direccion;
    }
    set Direccion(value) {
        this._Direccion = value;
    }
}
exports.Mail = Mail;
