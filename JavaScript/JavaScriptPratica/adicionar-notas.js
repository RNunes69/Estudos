const notas = [10, 6, 8];

notas.push(7);

// push adiciona ao final do array, so funcionar em arrays
// consigo manipular const se for um array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);