// Ciclo While = Mientras Que
// expresion que se cumple y que va a permanecer  mientras no 
// sea diferente

let contador = 0;

while (contador <= 10) {
    console.log('Linea #' + contador); // concatenar  = Unir 
    // Ciclo Infinito 
    // Pasa cuando no incremantemos nuestra condición
    contador++;
}
console.log('Finaliza Contandor en : ' + contador);

// Crear la tabla de multimplicar del numero 5 hasta el 10
// y al finalizar el codigo monstrar un mensaje 
// el mensjae debe decir Esta es la tabla del 5
// entregar en 6 minutos

let contador2 = 1;

while (contador2 <= 10) {
    console.log(' 5 X '+ contador2 + ' = ' + (5 * contador2) );
    contador2 ++
}
console.log("esta es la tabla del 5");