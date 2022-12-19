// Function 
// Declarativas
// fuction nombrefuncion() {
//  Cuerpo de la funcion    
// }

// escribe un log
function saludar() {
    console.log('Hola como estan');
}
// llamado a una funcion
saludar();

// funcion que reciba parametros
function saludar(nombre, edad ) {
    console.log(typeof(nombre));
    if(typeof(nombre)=== 'string') {
        console.log(`Hola, ${nombre} con ${edad} años`);
    } else {
        console.log('El nombre debe ser un string');
    }
}

saludar('Daniel', 12);

// funcion que reciba parametros y retorna un texto
function saludar(nombre, edad ) {
    return `Hola, ${nombre} con ${edad} años`;
}

console.log(saludar('Daniel', 12));

// sumar dos variables en una tercera variable y nor retorna nada

let c = 0;

function sumarNumeros(a, b) {
    this.c = a + b;
    console.log(this.c);
}

sumarNumeros(21, 12);
console.log(this.c);

// lavadora 
function lavarRopa(agua, jabon, ropa, cloro, suavizante) {
    let msm = '';
    // Se valida si tenemos agua
    if(agua === 0) {
        return 'nos hace falta agua para lavar';
    }

    if (jabon === 0) {
        return 'Debe ingresar Jabon'
    } else {
        msm = msm + ' -> Remojar \n'
    }

    // validamos si la ropa es de color o es blanca
    if(ropa === 'Color') {
        msm = msm + ' -> Ropa Color empieza Ciclo Color \n' 
        if(cloro > 0) {
            msm = msm + ' -> se tiro la ropa de color \n';
            msm = msm + ' -> Toco Estrenar!!! \n';
        }       
    }

    if(ropa === 'Blanca') {
        msm = msm + ' -> Ropa Blanca empieza Ciclo Blanco \n';
        if(cloro > 0) {
            msm = msm + ' -> Remojar con cloro \n';
        } else {
            msm = msm + ' -> Tacaño por eso le quedo amarilla esa ropa \n';
        }
    }

    if(suavizante > 0) {
        msm = msm + ' -> Suave como el amor de mama \n';
    } else {
        msm = msm + ' -> Como el amor de la suegra \n';
    }

    if(msm !== '') {
        msm = msm + ' -> Fin del proceso suena la musiquita \n';
    }

    return msm;
}

console.log(lavarRopa(1, 5, 'Blanca', 1, 1));
// gripa -> mocos
// Carro -> valida gasolina, aire, motor, starter, liquidos > transporte
// Cancion -> composicion, adecuacion instrumental ensamble, ensayo, grabacion resultado es una cancion
// Tarjeta Credito -> estudio si es aprobado o rechazado -> la dan un cupo  si no no puede
// Construir casa -> preparar terreno, contratar gente, comprar materiarles, pelar con el maestro, nos robaron materiales,
// nos dañaron las baldosas, pagamos por adelantado, peleamos de nuevo los hechamos nos contentamos y al final tenemos la casa a medias
// si contrate una constructora seria legal con cobro mas alto todos felices. -> una casa