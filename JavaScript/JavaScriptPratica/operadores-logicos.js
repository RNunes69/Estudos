let notaF = 7;
const faltas = 2;
const advertencias = 0;

if (notaF <= 7 && faltas >= 3) {
    console.log(`Reprovado, boas festas`)
} else {
    console.log(`Nao foi reprovado`)
}

if (faltas <= 2 && !advertencias) {
    console.log(`Recebeu bonus`)
} else {
    console.log(`Nao recebeu bonus`)
}
/*

true && true = true
true && false = false
false && true = false
false && false = false

true || true = true
true || false = true
false || true = true
false || false = false

!true = false
!false = true

*/

// pipe ( || ) significa: ou
// and ( && ) significa: e
// not ( ! ) significa: inversão de valores