// Crie uma função que receba dois arrays e os concatene em um único array.

/*
const arrays = [
    [1, 2, 3], ['Rafa', 'Rofo', 'Refe', [1, 2, 3]]
];

const arrayConcatenado = arrays.flat();
// flat achata os arrays dentro de arrays

console.log(arrayConcatenado);
*/

// Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array
// chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 7);

console.log(parteNumeros);
*/

// Dado o array frutas contendo frutas que desejamos comprar na feira:
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices

/*
let frutas = ['Maca', 'Banana', 'Laranja', 'Limao', 'Abacaxi'];

console.log(frutas);

frutas.splice(2, 2, 'Kiwi', 'Pessego')

console.log(frutas);
*/

// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar
// um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

/*
const menuPrincipal = ['Macarrao', 'Feijoada', 'Virada Paulista', 'Strogonoffe', 'Pizza'];
const menuDeSobremesas = ['Sorvete', 'Bolo', 'Pudim'];

console.log(menuPrincipal);
console.log(menuDeSobremesas);

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);
*/

// Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

/*
const bidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(bidimensional);
*/