// mono infinito
// npm install prompt-sync
console.clear()
const prompt = require('prompt-sync')();
const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"," ","1","2","3","4","5","6","7","8","9","0"];

let buleano = true;
console.log("")
console.log("███╗   ███╗ ██████╗ ███╗   ██╗ ██████╗     ██╗███╗   ██╗███████╗██╗███╗   ██╗██╗████████╗ ██████╗ ");
console.log("████╗ ████║██╔═══██╗████╗  ██║██╔═══██╗    ██║████╗  ██║██╔════╝██║████╗  ██║██║╚══██╔══╝██╔═══██╗");
console.log("██╔████╔██║██║   ██║██╔██╗ ██║██║   ██║    ██║██╔██╗ ██║█████╗  ██║██╔██╗ ██║██║   ██║   ██║   ██║");
console.log("██║╚██╔╝██║██║   ██║██║╚██╗██║██║   ██║    ██║██║╚██╗██║██╔══╝  ██║██║╚██╗██║██║   ██║   ██║   ██║");
console.log("██║ ╚═╝ ██║╚██████╔╝██║ ╚████║╚██████╔╝    ██║██║ ╚████║██║     ██║██║ ╚████║██║   ██║   ╚██████╔╝");
console.log("╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝     ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝    ╚═════╝ ");
console.log("")
console.log("ingrese la palabra: ");
let buscar = prompt("> ");

console.time("Tiempo")
    for (let i = 0; buleano; i++) {
        let salida = []
    
        for (let e = 0; e < buscar.length; e++) {
            let aleatorio = Math.floor(Math.random()* abecedario.length)
            salida.push(abecedario[aleatorio])
            var salida2 = salida.join("")
        }
    
    
        if (salida2 == buscar) {
            buleano = false
            console.clear()
            console.log("intento: ", i)
            console.log("exito: ",salida2);
        } else {
            console.clear()
            console.log("intento: ", i)
        }
    }
console.timeEnd("Tiempo")
