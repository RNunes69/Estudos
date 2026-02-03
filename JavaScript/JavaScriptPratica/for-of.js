const notas = [5, 8, 6, 10, 7];

let somaNotas = 0;
let i = 0;
for (let nota of notas){
    //i++
    //console.log(i)
    somaNotas += nota;
}

const media = somaNotas / notas.length;

console.log(`A media é ${media}`);