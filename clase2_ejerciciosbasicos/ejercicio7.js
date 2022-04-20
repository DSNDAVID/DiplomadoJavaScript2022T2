//escribe un programa que pida un numero y diga si es divisible por dos
const prompt = require('prompt');
prompt.start();
let n1 = prompt("Escribe un número");
if (n1 / 2 === 0) {
console.log("Es divisible por 2");
} else {
console.log("No es divisible por 2");
}