// Estructura Switch
// Switch (Condicion) {
//  case expresion:
//      hacer algo;
//      break;
//  case expresion:
//      hacer algo;
//      break;
//  default:
//      hacer algo por defecto
//}


let semaforo = 'Rojo';
switch (semaforo) {
    case 'Verde':
        console.log('Avance...');
        break;
    case 'Amarillo':
        console.log('Listos!!!');
        break;
    case 'Rojo':
        console.log('Detener');
        break;
    default:
        console.log(semaforo + ',No es ninguno color del semaforo');
        break;
}

console.log('Despues del Switch');
