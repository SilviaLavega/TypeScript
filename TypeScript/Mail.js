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
var Mail = /** @class */ (function () {
    //Creacion del constructor
    function Mail(Tipo, Direccion) {
        this._Direccion = Direccion;
        this._Tipo = Tipo;
    }
    Object.defineProperty(Mail.prototype, "Tipo", {
        //Creacion de los set y get de las varibles
        get: function () {
            return this._Tipo;
        },
        set: function (value) {
            this._Tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "Direccion", {
        get: function () {
            return this._Direccion;
        },
        set: function (value) {
            this._Direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
