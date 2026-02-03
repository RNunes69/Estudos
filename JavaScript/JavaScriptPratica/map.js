const notas = [10, 9.5, 8, 7, 6];

/* const notasAtualizadas = notas.map(function (nota){
    return nota + 1;
}) */

// Foi usado operador ternario, ((nota) => nota + 1) isso e uma arrow function que nao precisa de return pois é callback
// (>= 10 ? 10 ) uma condicao >=, se for true retorna 10, (: nota + 1) se for false ira adicionar 1
// (nota + 1 >= 10 ? 10 : nota + 1) adiciona 1 a nota, if nota + 1 for igual ou maior que 10, retorna 10, e for menor retorna nota + 1

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);


console.log(notasAtualizadas);