// Estructuras anidadas
// como se ve
// if(condicion) {
//  haga esto   
// } else if(condicion) {
//    
// } else {
//    
// }
//
// Ejemplo

// Rojo, Amarillo, Verde
let semaforo = 'Amarillo';

if(semaforo === 'Rojo') {
    console.log('PARAR');
} else if (semaforo === 'Amarillo') {
    console.log('Listo!!!');
} else if(semaforo === 'Verde') {
    console.log('Avanzar');
} else {
    console.log('El color ' + semaforo + ', No es color del semaforo');
}