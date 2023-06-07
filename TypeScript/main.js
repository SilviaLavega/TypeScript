"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Direccion_1 = require("./Direccion");
var Persona_1 = require("./Persona");
//Creacion de ejemplos de personas
var persona1 = new Persona_1.Persona('Miguel', 'Martin', 29, '87987896Z', new Date('1994-10-15'), 'Naranja', 'masculino', [new Direccion_1.Direccion('calle', 15, 2, 'B', 50002, 'Paseo Independencia', 'Zaragoza')], [new Mail_1.Mail('Miguelmartin@gmail.com', 'persona1')], [new Telefono_1.Telefono(Telefono_1.Tipo.movil, 687988432)], ['Hermano']);
var persona2 = new Persona_1.Persona('Laura', 'Martin', 23, '23567545Y', new Date('1999-10-23'), 'Amarillo', 'femenino', [new Direccion_1.Direccion('calle', 2, 6, 'C', 50013, 'camino de la torres', 'Zaragoza')], [new Mail_1.Mail('Lauralavega@gmail.com', 'persona2')], [new Telefono_1.Telefono(Telefono_1.Tipo.movil, 682094238)], ['Hermana']);
var persona3 = new Persona_1.Persona('Silvia', 'Martin', 50, '34546787B', new Date('1992-07-09'), 'Negro', 'femenino', [new Direccion_1.Direccion('calle', 23, 3, 'A', 50002, 'Miguel Servet', 'Zaragoza')], [new Mail_1.Mail('SilviaMartin@gmail.com', 'persona3')], [new Telefono_1.Telefono(Telefono_1.Tipo.fijo, 982094238)], ['Sin notas']);
var personas = [persona1, persona2, persona3];
//Identificacion de la persona que mediante el dni vamos a añadir varios campos
personas.forEach(function (element) {
    if (element.dni == '34546787B') {
        element.addDireccion(new Direccion_1.Direccion('calle', 2, 6, 'C', 50013, 'camino de la torres', 'Zaragoza'));
        element.addMail(new Mail_1.Mail('nombreApellido@gmail.com ', 'nombreApellido'));
        element.addTlfno(new Telefono_1.Telefono(Telefono_1.Tipo.movil, 623456790));
    }
});
//Imprimir el resultado
console.dir(personas, { depth: null });
