let cadena = require("./cadena");

let recibeCadena = cadena.recibeCadena("Anita lava la tina");
let palindromo = cadena.esPalindromo();
let contarPalabras = cadena.contarPalabras();
let contarLetras = cadena.contadorLetras();
let cuentaVocales = cadena.cuentaVocales();
let cuentaConsonantes = cadena.cuentaConsonantes();

//Visualizar en consola
console.log("La cadena es: \"" + recibeCadena + "\"");
console.log(palindromo);
console.log("La cadena tiene: " + contarPalabras + " palabra(s)");
console.log("La cadena tiene " + contarLetras + " letra(s)");
console.log("La cadena tiene: " + cuentaVocales + " vocal(es)");
console.log("La cadena tiene: " + cuentaConsonantes + " consonante(s)");
