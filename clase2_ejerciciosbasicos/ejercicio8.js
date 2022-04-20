//escribe un programa que nos diga si un numero dado es primo 
//(no es divisible por ningun otro numero que no sea el mismo o la unidad)
let n1 = prompt("Escribe un número");
let i;
let primer = true;
for (i=2; i < n1 / 2; i++) {
if (n1 % i === 0) {
primer = false;
}
}
if (primer) {
console.log("El número es primo");
} else {
console.log("El número no es primo");
}