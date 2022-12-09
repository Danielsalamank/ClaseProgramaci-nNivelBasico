// lee un Objeto y no permite operar con las llaves y los valores de dicho objeto
// FOR(Variable in Objeto que recorre )

let object = {
    nombre: 'Daniel',
    apellido: 'Salamanca',
    edad: 31
};

console.log(object);
for (const key in object) {
    console.log(key, object[key]);
}