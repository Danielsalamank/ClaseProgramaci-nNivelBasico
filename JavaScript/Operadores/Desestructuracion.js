// Operador desestructuracion de datos
// listas
//                  0          1           2          3  
let arreglo = ["Colombia", "Ecuador", "Venezuela", "Brazil"];

let [p0,p1,p2,p3] = arreglo;
console.log(p0);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(arreglo);


// objetos
// F = Femenino, M = Masculino 
let persona = {
    nombre: 'Daniel',
    apellido: 'Salamanca',
    edad: 31,
    sexo: 'M'
};

let { nombre, apellido,edad, sexo } = persona;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(sexo);
console.log(persona);



