let cadena1 = "Anita lava la tina"

function recibeCadena(cadena = cadena1) {
    cadena1 = cadena;
    return cadena;
}

function esPalindromo(cadena = cadena1) {
    let cadenaEspacios = cadena.replace(/[\W_]/g, '').toLowerCase();
    return cadenaEspacios == cadenaEspacios.split('').reverse().join('') ?
        "La cadena si es palindromo" : "La cadena no es palindromo";
}

function contarPalabras(cadena = cadena1) {
    let array = cadena.split(" ");
    return array.length;
}

function contadorLetras(cadena = cadena1) {
    let cadenaContar = cadena.split(" ").join("");
    return cadenaContar.length;
}

function cuentaVocales(cadena = cadena1) {
    return cadena.match(/[aeiou]/gi).length;
}
function cuentaConsonantes(cadena = cadena1) {
    return cadena.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;
}

module.exports.esPalindromo = esPalindromo;
module.exports.contarPalabras = contarPalabras;
module.exports.contadorLetras = contadorLetras;
module.exports.cuentaVocales = cuentaVocales;
module.exports.cuentaConsonantes = cuentaConsonantes;
module.exports.recibeCadena = recibeCadena;