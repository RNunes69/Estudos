const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += media * 0.1;
}

// += soma 1 ao numero é o mesmo que x = x + 1;
// e ++ adiciona 1

console.log(`a media e ${media.toFixed(2)}`);

