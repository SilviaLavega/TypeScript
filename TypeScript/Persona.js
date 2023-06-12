"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    //Creacion del constructor de persona
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._edad = edad;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    //get y set de las variables
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get dni() {
        return this._dni;
    }
    set dni(value) {
        this._dni = value;
    }
    get cumpleanos() {
        return this._cumpleanos;
    }
    set cumpleanos(value) {
        this._cumpleanos = value;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(value) {
        this._colorFavorito = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(value) {
        this._direcciones = value;
    }
    get mails() {
        return this._mails;
    }
    set mails(value) {
        this._mails = value;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(value) {
        this._telefonos = value;
    }
    get notas() {
        return this._notas;
    }
    set notas(value) {
        this._notas = value;
    }
    //Funciones para añadir en el array todos los objetos creados mediante las otras clases
    addDireccion(value) {
        this._direcciones.push(value);
    }
    addMail(value) {
        this._mails.push(value);
    }
    addTlfno(value) {
        this._telefonos.push(value);
    }
    addNota(value) {
        this._notas.push(value);
    }
}
exports.Persona = Persona;
