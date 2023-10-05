

//METODOS // MANIPULACION DE ARRAYS //



let listaAlumno = ["pepe", "ramiro", "laura"];



console.log("arreglo inicial:", listaAlumno);




//METODO PUSH// AGREGA ELEMENTO AL ARREGLO ; AL FINAL //


listaAlumno.push("marta", "ramon");

console.log("arreglo inicial despues del push:", listaAlumno);



// METODO UNSHIFT // AGREGA UN ELEMENTO AL INICIO DEL ARRAY //



listaAlumno.unshift("roman", "jorge");

console.log("arrregloe con shift", listaAlumno);


//SHIFT, SACA UN ELEMENTO DE LA PRIMERA POSICION//


let resultado_shift = listaAlumno.shift();
console.log("arreglo despues del shift", listaAlumno);
console.log("se elimino a :", resultado_shift);

// POP ELIMINA EL DE LA ULTIMA POSICION//


listaAlumno.pop();

console.log("arreglo despues del pop:", listaAlumno);




//SPLICE// PUEDO ELIMINAR MULTIPLES ELEMENTOS, SEGUN LA POSICION//


listaAlumno.splice(1, 2, "carlos", "fede", "luis");

console.log("arreglo despues del splice:", listaAlumno);



// JOIN , GENERO STRING CON TODOS LOS ELEMENTOS DEL ARREGLO // separados por lo que ponga entro los ()


let resultadoJoin = listaAlumno.join("-");


console.log("resultado join", resultadoJoin);


//CONCATENAR// EL RESULTADO ES UN TERCER ARRAY EN ESTE CASO



let listaColores = ["azul", "rojo", "verde"];

let resultadoConcat = listaAlumno.concat(listaColores);

console.log("resultado de concat:", resultadoConcat);




// SLICE, PUEDO CORTAR UNA PORCION DEL ARRRAY// el fin no esta incluido. el hasta no lo incluye // no altera el array original


let  corte =resultadoConcat.slice(2,4);

console.log(" resultado con slice", corte);
console.log( "resultado despues del slice", resultadoConcat);



//INDEX OF // PUEDO OBTENER EL INDICE EN UN DETERMINADO VALOR//



console.log("el indice de marta es:", resultadoConcat.indexOf("marta"));


console.log("el indice de esteban es:", resultadoConcat.indexOf("esteban"));



let elementoBorrar = resultadoConcat.indexOf("marta");

resultadoConcat.splice( elementoBorrar , 1);
console.log("arreglo despues del index + splice", resultadoConcat);



//REVERSE , INVIERTE EL ORDEN


resultadoConcat.reverse();
console.log("resultado con reverse",resultadoConcat);
























