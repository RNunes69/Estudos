// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre
// eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente.Exiba os resultados finais no console.

/*
let saldo = 2137;
let deposito = 560;
let saque = 1200;

let operacao;

operacao = (saldo + deposito) - saque;

console.log(`Seu saldo era: ${saldo}`);
console.log(`Seu deposito foi de: ${deposito}`);
console.log(`Seu saque foi de: ${saque}`);
console.log(`Seu saldo e: ${operacao}`);
*/

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

/*
let numero = 8;

let resultado = (numero % 2 === 0) ? 'Par' : 'Impar';

console.log(`O numero ${numero} e ${resultado}.`);
*/

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade.
// Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

/*
const login = true;
const permisson = true;
let acesso;

acesso = login && permisson ? 'Sim, vc tem permissao' : 'Nao, vc nao tem permissao';

console.log(acesso);

if (login && permisson) {
    console.log('Sim, vc tem permissao')
} else {
    console.log('Nao, vc nao tem permissao')
}
*/

// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

/*
const idadePermitida = true;
const PaisJuntos = true;

const dirigir = idadePermitida || PaisJuntos;

console.log(dirigir);
*/

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem
// a idade mínima e qual a idade do usuário e utilize estruturas condicionais(if, else) para determinar se o usuário pode realizar a compra.

/*
const idade_necessaria = 18;
const idade_cliente = 15;

if (idade_cliente >= idade_necessaria) {
    console.log('Sim, voce pode realizar a compra.')
} else {
    console.log('Nao, voce nao pode realizar a compra.')
}
*/