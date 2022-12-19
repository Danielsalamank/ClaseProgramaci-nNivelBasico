// 1. Objeto con los datos personales de todos = Ok
// 2. Crear una funsion que haga un login = Ok
// 3. debe buscar una personas por el nombre o el apellido
// 4. nos va a identificar si la persona es hombre o mujer
// 5. no debe identificar si es alumno o profesor

const CP = [
    { Nombre: 'Daniel', Apellido: 'Salamanca', Edad: 31, Rol: 'Profesor', genero: 'M', user: 'dSalamanca', password: '123456'},
    { Nombre: 'Briggitte', Apellido: 'Angrino', Edad: 27, Rol: 'Alumno', genero: 'F', user: 'bAngrino', password: '123456'},
    { Nombre: 'Gissel ', Apellido: 'Moreno ', Edad: 35, Rol: 'Alumno', genero: 'F', user: 'gMoreno', password: '123456'},
    { Nombre: 'Paula', Apellido: 'Molina', Edad: 39, Rol: 'Alumno', genero: 'F', user: 'pMolina', password: '123456'},
    { Nombre: 'Jose', Apellido: 'Lopez', Edad: 32, Rol: 'Alumno', genero: 'M', user: 'jLopez', password: '123456'},
    { Nombre: 'Juan', Apellido: 'Velez', Edad: 36, Rol: 'Alumno', genero: 'M', user: 'jVelez', password: '123456'},
    { Nombre: 'Alisson', Apellido: 'Orozco', Edad: 25, Rol: 'Alumno', genero: 'F', user: 'aOrozco', password: '123456'},
];

var usuarioLogeado = {};

function login(username, pass) {
    if(username === '') {
        return this.retornarMensajeVacio('el username');
    }

    if(pass === '') {
        return this.retornarMensajeVacio('El Password');
    }

    for (const fila of CP) {
        if (fila.user === username && fila.password === pass) {
            usuarioLogeado = fila;
            return usuarioLogeado;
        }
    }   

    if (usuarioLogeado.Nombre === undefined) {
        usuarioLogeado = {
            mensaje: 'Usuario o contraseña errados, verifique nuevamente y por favor intente de nuevo',
            codigoerror: 404
        }
        return usuarioLogeado;
    }
}

function retornarMensajeVacio(dato) {
    usuarioLogeado = {
        mensaje: dato + ', no puede estar vacio!!!',
        codigoerror: 401
    }
    return usuarioLogeado;
}

function BuscarPersona(texto) {
    let persona = {};
    if(texto === '') {
        return this.retornarMensajeVacio('El texto que busca');
    }

    for (const fila of CP) {
        if (fila.Nombre === texto || fila.Apellido === texto) {
            persona = fila
            return fila;
        }
    } 
    
    if (persona.Nombre === undefined) {
        const mensaje = {
            mensaje: 'La persona que esta buscando no se encuentra en este curso',
            codigoerror: 404
        }
        return mensaje;
    }
}

// en la siguente linea se llama la funcion login y se guarda la respuesta en la variable
const usuario = prompt('Ingrese su usuario.');
const pas = prompt('Ingrese su password.');
this.usuarioLogeado = login(usuario, pas);
// se muestra los datos despues de la funcion
if (usuarioLogeado.codigoerror !== undefined) {
    console.log(usuarioLogeado.mensaje);
} else {
    let genero = '';
    let rol = '';
    const input = prompt('Hola, ' + usuarioLogeado.Nombre + '\n Ingrese el nombre o el apellido de la persona\n que desea buscar');
    console.log(usuarioLogeado.Nombre);
    
    let resposeBusqueda = BuscarPersona(input);
    
    if(resposeBusqueda.codigoerror !== undefined) {
        alert(resposeBusqueda.codigoerror, resposeBusqueda.mensaje);
    } else {
        if (resposeBusqueda.Rol === 'Profesor') {
            rol = 'Profesor';
        } else {
            rol = 'Alumno';
        }
    
        if(resposeBusqueda.genero === 'M') {
            genero = 'Hombre'
        } else {
            genero = 'Mujer'
        }
        alert('los datos de la persona que busca son: \n ' + JSON.stringify(resposeBusqueda) + '\nEl rol es: ' + rol + '\nEl genero es: ' + genero);
    }
}


