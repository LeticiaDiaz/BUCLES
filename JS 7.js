let numero
let sumanumeros = 0

while (numero !== 0) {
    numero = parseInt (window.prompt ("Escribe un número"))  ;
    if (numero < 0) {
        window.alert ("Se ignoran los valores negativos") ;
    } else {
        sumanumeros = sumanumeros + numero;
    }
}
window.alert (`La suma es ${sumanumeros}`) ;