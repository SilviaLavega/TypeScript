//Imports para la utilizacion de los constructores de las otras clases
import { Telefono } from './Telefono';
import { Mail } from './Mail';
import { Direccion } from './Direccion';



export class Persona {
    //Creacion de las variables de persona
    private _nombre: String;
    private _apellidos: String;
    private _edad: Number;
    private _dni: String;
    private _cumpleanos: Date; 
    private _colorFavorito: String;
    private _sexo: String;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: String[];

    //Creacion del constructor de persona
    constructor(
        nombre: String,
        apellidos: String,
        edad: Number,
        dni: String,
        cumpleanos: Date,
        colorFavorito: String,
        sexo: String,
        direcciones: Direccion[],
        mails: Mail[],
        telefonos: Telefono[],
        notas: String[] 
    )
     {
        this.nombre = nombre
        this.apellidos = apellidos
        this.dni = dni
        this.cumpleanos = cumpleanos
        this.edad = edad
        this.colorFavorito = colorFavorito
        this.sexo = sexo
        this.direcciones = direcciones
        this.mails = mails
        this.telefonos = telefonos
        this.notas = notas
    } 

    //get y set de las variables
    public get nombre(): String {
        return this._nombre;
    }
    public set nombre(value: String) {
        this._nombre = value;
    }
    
    public get apellidos(): String {
        return this._apellidos;
    }
    public set apellidos(value: String) {
        this._apellidos = value;
    }
    
    public get edad(): Number {
        return this._edad;
    }
    public set edad(value: Number) {
        this._edad = value;
    }
    
    public get dni(): String {
        return this._dni;
    }
    public set dni(value: String) {
        this._dni = value;
    }
    
    public get cumpleanos(): Date {
        return this._cumpleanos;
    }
    public set cumpleanos(value: Date) {
        this._cumpleanos = value;
    }
    
    public get colorFavorito(): String {
        return this._colorFavorito;
    }
    public set colorFavorito(value: String) {
        this._colorFavorito = value;
    }
    
    public get sexo(): String {
        return this._sexo;
    }
    public set sexo(value: String) {
        this._sexo = value;
    }
    
    public get direcciones(): Direccion[] {
        return this._direcciones;
    }
    public set direcciones(value: Direccion[]) {
        this._direcciones = value;
    }
    
    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }
    
    public get telefonos(): Telefono[] {
        return this._telefonos;
    }
    public set telefonos(value: Telefono[]) {
        this._telefonos = value;
    }
    
    public get notas(): String[] {
        return this._notas;
    }
    public set notas(value: String[]) {
        this._notas = value;
    }
    
    //Funciones para añadir en el array todos los objetos creados mediante las otras clases
    public addDireccion(value: Direccion) {
        this._direcciones.push(value)
    }
    public addMail(value: Mail) {
        this._mails.push(value)
    }
    public addTlfno(value: Telefono) {
        this._telefonos.push(value)
    }
    public addNota(value: String) {
        this._notas.push(value)
    }

}

