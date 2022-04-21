//escribe un programa que pida un numero y diga si es divisible por dos

cons prompt = require('prompt')

prompt.start()

console.log('digite un valor para saver si es divisible por 2')

prompt.get(['valor1',], funtion (err, result) {

  if(result.valor1 % 2 === 0){

    console.log(resul.valor1 + ' es divisible ')

else
    
    console.log( result.valor1 +'no es divisible ' )
