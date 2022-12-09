// For 
// Para QUE
// for(expresion Inicial; expresion condicional; expresion de actualización) {}

for (let index = 0; index <= 10; index++) {
    console.log('Linea: ' + index);
}

// Ejemplo Jose - Daniel
for (let comida = 0; comida <= 3; comida++) {
    if(comida === 1) {
        console.log('fue el desayuno');
    } else if(comida === 2) {
        console.log('Es el Almuerzo');
    } else if (comida === 3) {
        console.log('Es la comida');        
    } else {
        console.log('Tengo un filo que si me agacho me corto!!!');
    }
}

let msm = 0;
for (let dormir = 8; dormir <= 8; dormir++) {
    if(dormir === 8 && msm === 0) {
        console.log('Dormimos placidamente');
    } else {
        if(dormir < 8 && msm === 0) {
            console.log('Se va a enfermar, cuando sea viejo ya vera');
            msm ++;
        }
    }
}