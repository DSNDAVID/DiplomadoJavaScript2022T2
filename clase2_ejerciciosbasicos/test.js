const prompt = require('prompt-sync')({sigint: true});


// let nom = prompt('cual es tu nombre? ');
// let apellido = prompt('cual es tu apellido? ');


// console.log('el usuario se llama ' + nom + ' ' +apellido );

 
let n1 = parseInt(prompt('inserte el primer valor: '));  
let n2 = parseInt(prompt('inserte el segundo valor: ')); 
let resultado = n1 + n2; 

console.log('el resultado es: ' + resultado );