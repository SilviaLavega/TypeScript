"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = exports.Tipo = void 0;
//Creamos un enum con los tipos de telefono de forma que solo pueda utilizar los tipos movil y fijo
var Tipo;
(function (Tipo) {
    Tipo["fijo"] = "fijo";
    Tipo["movil"] = "movil";
})(Tipo || (exports.Tipo = Tipo = {}));
var Telefono = /** @class */ (function () {
    //Constructor de la clase
    function Telefono(Tipo, Numero) {
        this._Numero = Numero;
        this._Tipo = Tipo;
    }
    Object.defineProperty(Telefono.prototype, "Tipo", {
        //get y set de las variables
        get: function () {
            return this._Tipo;
        },
        set: function (value) {
            this._Tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "Numero", {
        get: function () {
            return this._Numero;
        },
        set: function (value) {
            this._Numero = value;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
