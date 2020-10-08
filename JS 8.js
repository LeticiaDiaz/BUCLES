let valor = window.prompt ("Introduce P para ver los valores pares o I para ver los impares.").toLowerCase() ;
let num = 0

while (valor !== "p" && valor !== "i") {
    valor = window.prompt ("Ese valor no es correcto, introduzcalo de nuevo").toLowerCase();
}

if (valor === "p") {
    for (let i = 0; i<=100; i++) {
        if (i % 2 == 0) {
        console.log (i)
        }
    } 
    
} else if (valor === "i")     {
    for ( let i = 0 ; i<=100; i++) {
        if (i % 2 !== 0) {
            console.log (i)
        }
    }
}





