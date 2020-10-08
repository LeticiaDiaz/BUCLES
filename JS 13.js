let dia = parseInt (window.prompt ("Escribe el dia en el que naciste"))
let mes = parseInt (window.prompt ("Escribe el mes en el que naciste"))
let anho = parseInt (window.prompt ("Escribe el año en el que naciste"))
let resultadoFinal = 0
let resultado = (dia + mes + anho).toString()

for (let i = 0; i<resultado.length; i++) {
     resultadoFinal = resultadoFinal + parseInt(resultado.substring (i,i+1))
    }
     console.log (resultadoFinal)


















