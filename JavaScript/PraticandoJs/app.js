let chute;
let tentativas = 1;
let num = 10000;
let numeroSecreto = parseInt(Math.random() * num + 1);

console.log(`O numero secreto é: ${numeroSecreto}`);
while(chute != numeroSecreto){
    chute = prompt(`Insira um numero entre 0 e ${num}`);
    if (chute == numeroSecreto){
        break;
    } else if(chute < numeroSecreto) {
        tentativas ++
        alert(`Você errou, o numero é maior que ${chute}`);
        alert(tentativas)
    } else {
        alert(`Você errou, o numero é menor que ${chute}`);
        tentativas ++
        alert(tentativas)
    }
    
}

if (tentativas == 1){
    alert('Parabéns, você acertou o número secreto ' + numeroSecreto + ', com ' + tentativas + ' tentativa.');
} else {
    alert('Parabéns, você acertou o número secreto ' + numeroSecreto + ', com ' + tentativas + ' tentativas.');
}