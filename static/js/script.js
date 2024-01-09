console.log('holaaaaaaaaaaaaaaaa');

//Objetos
let edad;
let nombre;
let personaje = {
    //llave: valor || propiedad
    nombre: "Sdenka",
    edad: 15
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['edad']);
delete personaje.nombre;
console.log(personaje);


//arrays
let animales = ['perro', 'vaca'];
console.log(animales);
console.log(animales[0]);

animales [20] = 'gato';
console.log(animales);
console.log(typeof animales);
console.log(animales.length);
console.log("_--------");


//funciones
function holaMundo(animales,auxi){
    console.log(animales);
    console.log(typeof animales);
    console.log(arguments);
}

holaMundo(animales,15);

//Operadores
let auxi = 15;
console.log(auxi>15);
console.log(auxi>=15);
