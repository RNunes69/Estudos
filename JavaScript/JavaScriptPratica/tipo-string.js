
const estudante = "Rafael";
const aluno = 'Rafaella';
const cumprimento = '"nossa lema e estudar bastante"';
const citacao = `Rafa diz: "nosso lema e 'estudar' bastante!"`;

console.log(estudante, aluno, cumprimento, citacao);  

console.log(`A estudante chama ${aluno}`);

const senha = 'SenhaSegura123' + aluno;

console.log(senha.toLowerCase());

//to upper case ou lower case, é usado como forma de colocar tudo em maiusculo ou minusculo

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'

'estudando JavaScript'.includes('Java'); // retorna true

const texto = 'estudando JavaScript';
texto.includes('Java'); // retorna true