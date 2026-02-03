// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

/* let ganho = [100.00, 232.00, 300.00, 1.50, 528.25]
let total = 0;

for(dinheiro of ganho){
    total += dinheiro;
}

console.log(total); */

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

/* let ganho = [100.00, 232.00, 300.00, 1.50, 528.25]

for(let i = 0; i < ganho.length; i++){
    console.log(`Índice: ${i}, Elemento: ${ganho[i]}`);
} */

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

/* let ganho = [100, 232, 300, 106, 528]
let total = 0;

for(let i = 0; i < ganho.length; i++){
    total += ganho[i]
}

console.log(total); */

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

/* const ganho = [100, 232, 300, 106, 528];
let menor = ganho[0];
let maior = ganho[0];
console.log(menor, maior);

// Eu guardo as variáveis < e > no índice 0 do variavel ganho, porque é de lá que precisamos achar o menor e o maior valor. Depois, é só comparar um por um em uma estrutura de loop for

 for(let i = 1; i < ganho.length; i++){
    console.log(ganho[i]);
    if(ganho[i] > maior){
        maior = ganho[i]
    }else if(ganho[i] < menor){
        menor = ganho[1]
    }
}

console.log(menor, maior); */

// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

/* const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let num = 0;
for(let i = 0; i < numeros.length; i++){
    num = numeros[i]
    if(num % 2 == 0){
        console.log(num)
    }
} */

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

/* const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

const media = somaNotas / notas.length;

console.log(`A media é ${media}`); */