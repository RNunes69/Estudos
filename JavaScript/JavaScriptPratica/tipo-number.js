const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5');

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log('A média é: ' + total.toFixed(2));

nome = 'Rafael'
console.log('Meu nome é ' + nome);

//parseInt é usado pra uma string possa ser usado como numero
//parseFloat é usado pra uma string possa ser usado como numero ponto flutuante
//Number é usado pra um string possa ser usado como numero
//toFixed é usado para limitar o numero de casas depois da virgula

Number("1"); // retorna o número 1 
Number("Alura"); // retorna NaN
Number(undefined); // retorna NaN
Number(null); // retorna 0

parseInt(‘4’); // retorna o número 4
parseInt(‘4.5’); // retorna o número 4

parseFloat(‘4’); // retorna o número 4
parseFloat(‘4.5’); // retorna o número 4.5
parseFloat(‘4.5abc’); // retorna o número 4.5

+’45’ // retorna o número 45
+true // retorna o número 1

console.log(typeof +’45’); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’