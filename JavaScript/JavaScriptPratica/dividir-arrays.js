const listEstudantes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
    'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

console.log(listEstudantes.length);

const sala1 = listEstudantes.slice(0, listEstudantes.length / 2);
const sala2 = listEstudantes.slice(listEstudantes.length / 2);

console.log(`A sala 1 tem ${sala1.length} estudantes, eles sao ${sala1}`);
console.log(`A sala 2 tem ${sala2.length} estudantes, eles sao ${sala2}`);
