const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// 1 expressao, e executada apenas uma vez (ate o ;)
// 2 expressao, e a condicao de execucao, enquanto o for true
// 3 expressao, e excita sempre no final do bloco (apos o console)
// for é usado quando ja se sabe quantas vezes vai ser usado a repeticao
for (let indice = 0; indice < notas.length; indice++){
    console.log(indice, notas[indice]);
}