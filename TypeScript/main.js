"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Telefono_1 = require("./Telefono");
const Mail_1 = require("./Mail");
const Direccion_1 = require("./Direccion");
const Persona_1 = require("./Persona");
//Creacion de ejemplos de personas
const persona1 = new Persona_1.Persona('Miguel', 'Martin', 29, '87987896Z', new Date('1994-10-15'), 'Naranja', 'masculino', [new Direccion_1.Direccion('calle', 15, 2, 'B', 50002, 'Paseo Independencia', 'Zaragoza')], [new Mail_1.Mail(Mail_1.TipoMail.gmail, 'Miguelmartin@gmail.com')], [new Telefono_1.Telefono('movil', 687988432)], ['Hermano']);
const persona2 = new Persona_1.Persona('Laura', 'Martin', 23, '23567545Y', new Date('1999-10-23'), 'Amarillo', 'femenino', [new Direccion_1.Direccion('calle', 2, 6, 'C', 50013, 'camino de la torres', 'Zaragoza')], [new Mail_1.Mail(Mail_1.TipoMail.outlook, 'Lauralavega@outlook.com')], [new Telefono_1.Telefono('movil', 682094238)], ['Hermana']);
const persona3 = new Persona_1.Persona('Silvia', 'Martin', 50, '34546787B', new Date('1992-07-09'), 'Negro', 'femenino', [new Direccion_1.Direccion('calle', 23, 3, 'A', 50002, 'Miguel Servet', 'Zaragoza')], [new Mail_1.Mail(Mail_1.TipoMail.hotmail, 'SilviaMartin@hotmail.com')], [new Telefono_1.Telefono('fijo', 982094238)], ['Sin notas']);
let personas = [persona1, persona2, persona3];
//Identificacion de la persona que mediante el dni vamos a añadir varios campos
personas.forEach(element => {
    if (element.dni == '34546787B') {
        element.addDireccion(new Direccion_1.Direccion('calle', 2, 6, 'C', 50013, 'camino de la torres', 'Zaragoza'));
        element.addMail(new Mail_1.Mail(Mail_1.TipoMail.gmail, 'nombreApellido@gmail.com'));
        element.addTlfno(new Telefono_1.Telefono('movil', 623456790));
    }
});
//Imprimir el resultado
console.dir(personas, { depth: null });
