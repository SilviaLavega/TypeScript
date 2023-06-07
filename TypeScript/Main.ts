import { Telefono } from './Telefono';
import { Mail } from './Mail';
import { Direccion } from './Direccion';
import { Persona } from './Persona';


//Creacion de ejemplos de personas
const persona1: Persona = new Persona (
    'Miguel',
    'Martin',
    29,
    '87987896Z',
    new Date('1994-10-15'),
    'Naranja',
    'masculino',
    [new Direccion('calle',15,2,'B',50002,'Paseo Independencia','Zaragoza')],
    [new Mail('Miguelmartin@gmail.com','persona1')],
    [new Telefono('movil',687988432)],
    ['Hermano'],
);

const persona2: Persona = new Persona (
    'Laura',
    'Martin',
    23,
    '23567545Y',
    new Date('1999-10-23'),
    'Amarillo',
    'femenino',
    [new Direccion('calle',2,6,'C',50013,'camino de la torres','Zaragoza')],
    [new Mail('Lauralavega@gmail.com','persona2')],
    [new Telefono('movil',682094238)],
    ['Hermana'],
);

const persona3: Persona = new Persona (
    'Silvia',
    'Martin',
    50,
    '34546787B',
    new Date('1992-07-09'),
    'Negro',
    'femenino',
    [new Direccion('calle',23,3,'A',50002,'Miguel Servet','Zaragoza')],
    [new Mail('SilviaMartin@gmail.com','persona3')],
    [new Telefono('fijo',982094238)],
    ['Sin notas'],
);

let personas = [persona1, persona2, persona3];

//Identificacion de la persona que mediante el dni vamos a añadir varios campos
personas.forEach(element => {
    if(element.dni == '34546787B'){
        element.addDireccion(new Direccion('calle',2,6,'C',50013,'camino de la torres','Zaragoza'));
        element.addMail(new Mail('nombreApellido@gmail.com ', 'nombreApellido'));
        element.addTlfno(new Telefono('movil', 623456790));
    }
});

//Imprimir el resultado
console.dir(personas, {depth: null});