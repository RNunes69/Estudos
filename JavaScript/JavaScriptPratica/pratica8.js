// Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

/* const notas = [10, 10, 5, 15];

notas.forEach(function (nota, indice){
    console.log(`Índice: ${indice}, Nota: ${nota}`);
});
 */

// Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. 
// Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

/* const notas = [10, 10, 5, 15];
let adicao = 0;

notas.forEach(function (executaOperacaoEmArray){
    adicao = executaOperacaoEmArray + 1;
    console.log(adicao);
}) */

// Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. 
// Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

/* 
function encontrarNumero(array, numero) {
    const indice = array.indexOf(numero);
    
    if (indice !== -1) {
        return indice;
    } else {
        return -1;
    }
}

const numeros = [10, 20, 30, 40, 50];
const numeroProcurado = 20;

const resultado = encontrarNumero(numeros, numeroProcurado);
console.log(`O numero ${numeroProcurado} foi encontrado na posição ${resultado}`);
*/
