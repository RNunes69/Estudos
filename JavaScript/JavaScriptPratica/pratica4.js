// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

/*
function saudacao(nome) {
    return console.log(`Ola ${nome}, seja bem vindo`);
}

saudacao('Rafael');
*/

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

/*
function maioridade(idadeUsuario) {
    if (idadeUsuario >= 18) {
        console.log('Vc e de maior')
    } else {
        console.log('Vc nao e de maior')
    }
}
maioridade(17);
*/

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando
// o método de string reverse().Retorne true se for um palíndromo e false caso contrário.Imprima o resultado no console.

/*
function ehPalindromo(palavra) {
    let invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
}

// split separa cada letras, como se fosse uma array
// reverse inverte as letras
// join junta as letras novamente

console.log(ehPalindromo('arara')); // true
console.log(ehPalindromo('rafael')); // false
*/

// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else)
// para comparar os valores e determinar o maior.Imprima o maior valor no console.

/*
let aMaior;
function maior(a, b, c) {
    if (a >= b && a >= c) {
        aMaior = a;
    } else if (b >= a && b >= c) {
        aMaior = b;
    } else {
        aMaior = c;
    }
    return aMaior;
}

maior(16, 17, 16);
console.log(`O maior numero foi o ${aMaior}`);
*/

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

/*
const calculaPotencia = (base, expoente) => base ** expoente;

const resultado = calculaPotencia(2, 3);
console.log(`O resultado é: ${resultado}`);
*/
