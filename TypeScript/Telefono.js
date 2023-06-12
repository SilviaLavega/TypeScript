"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    //Constructor de la clase
    constructor(Tipo, Numero) {
        this._Numero = Numero;
        this._Tipo = Tipo;
    }
    //get y set de las variables
    get Tipo() {
        return this._Tipo;
    }
    set Tipo(value) {
        this._Tipo = value;
    }
    get Numero() {
        return this._Numero;
    }
    set Numero(value) {
        this._Numero = value;
    }
}
exports.Telefono = Telefono;
