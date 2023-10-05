class Alumno{

    constructor(nombre, apellido, legajo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
    }
}
/*
let listaAlumno = [];

for(let i = 0 ; i < 3 ; i = i +1){
    let nombre = prompt("ingrese nombre");
    let apellido = prompt("ingrese apellido");
    let legajo = prompt("ingrese legajo");

    nuevo_alumno = new Alumno( nombre , apellido, legajo);
    listaAlumno.push(nuevo_alumno);
}

console.log(listaAlumno);

*/

let listaAlumno = [" pepe", "ramiro", "laura"];

for(let nombreAlumno  of listaAlumno){
    console.log("bienvenido ,", nombreAlumno);
}


