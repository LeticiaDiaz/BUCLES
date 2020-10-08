let numero = window.prompt ("Introduce un número de tres digitos")
let resultado = 0
for (let i = 0; i<numero.length; i++) {
    resultado = resultado + parseInt(numero.substring(i,i+1))
} 
console.log (resultado)


