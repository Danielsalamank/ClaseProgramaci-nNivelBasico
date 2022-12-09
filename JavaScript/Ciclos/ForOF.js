// El ciclo For OF nos permite acceder unicamente a listas y string's
// for( variable OF Lista)

const CP = [
    { Nombre: 'Daniel', Apellido: 'Salamanca', Edad: 31, Rol: 'Profesor', genero: 'M'},
    { Nombre: 'Briggitte', Apellido: 'Angrino', Edad: 27, Rol: 'Alumno', genero: 'F'},
    { Nombre: 'Gissel ', Apellido: 'Moreno ', Edad: 35, Rol: 'Alumno', genero: 'F'},
    { Nombre: 'Paula', Apellido: 'Molina', Edad: 39, Rol: 'Alumno', genero: 'F'},
    { Nombre: 'Jose', Apellido: 'Lopez', Edad: 32, Rol: 'Alumno', genero: 'M'},
    { Nombre: 'Juan', Apellido: 'Velez', Edad: 36, Rol: 'Alumno', genero: 'M'},
    { Nombre: 'Alisson', Apellido: 'Orozco', Edad: 25, Rol: 'Alumno', genero: 'F'},
];

let countAlumnos = 0;
let countHombres = 0;
let countMujeres = 0;
let countmayores30 = 0;
let nombrecprofesor = '';

for (const fila of CP) {

    if (fila.Rol === 'Profesor') {
        nombrecprofesor = fila.Nombre + ' ' + fila.Apellido;
    }

    if(fila.Rol === 'Alumno') {
        countAlumnos++;
    }

    if(fila.genero === 'M') {
        countHombres++;
    } else {
        countMujeres++;
    }

    if(fila.Edad > 30) {
        countmayores30++;
    }

}

console.log('En la clase de programación hay ' + countAlumnos + ' Alumnos');
console.log('En la clase de programación hay ' + countHombres + ' Hombres');
console.log('En la clase de programación hay ' + countMujeres + ' Mujeres');
console.log('En la clase de programación hay ' + countmayores30 + ' personas Mayores de 30 años');
console.log('El profesor de programación es: ' + nombrecprofesor);


let texto = 'Gracias por estar en la clase el día de hoy';
console.log(texto);    
for (const row of texto) {
    console.log(row);    
}