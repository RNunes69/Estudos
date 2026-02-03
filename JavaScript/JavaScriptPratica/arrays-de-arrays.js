const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//Juntou os arrays
const lista = [alunos, medias];

console.log(
    `a aluna da posicao 1 da lista e: ${lista[0][1]}. A nota dessa aluna ${lista[1][1]}`
);

// a primeira [] e a posicao dela na lista original, e a segunda [] e aposicao da array dentro da array
console.log(
    `${lista[0][0]} ${lista[1][0]}, ${lista[0][1]} ${lista[1][1]}, ${lista[0][2]} ${lista[1][2]}, ${lista[0][3]} ${lista[1][3]}`
);