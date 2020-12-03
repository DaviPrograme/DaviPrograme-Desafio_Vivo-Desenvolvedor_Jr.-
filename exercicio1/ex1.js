function ObjectIntervalo () {
    return ({
        zero: 0,
        um: 0,
        dois: 0,
        tres: 0,
        quatro: 0,
        cinco: 0,
        seis: 0,
        sete: 0,
        oito: 0,
        nove: 0,
        dez: 0,
        onze: 0,
        doze: 0,
        treze: 0,
        quatorze: 0,
        quinze: 0,
    })
}

function setObject(vet, obj){
    vet.forEach(element => {
        (element === 0) ? obj.zero += 1 : 0;
        (element === 1) ? obj.um += 1 : 0;
        (element === 2) ? obj.dois += 1 : 0;
        (element === 3) ? obj.tres += 1 : 0;
        (element === 4) ? obj.quatro += 1 : 0;
        (element === 5) ? obj.cinco += 1 : 0;
        (element === 6) ? obj.seis += 1 : 0;
        (element === 7) ? obj.sete += 1 : 0;
        (element === 8) ? obj.oito += 1 : 0;
        (element === 9) ? obj.nove += 1 : 0;
        (element === 10) ? obj.dez += 1 : 0;
        (element === 11) ? obj.onze += 1 : 0;
        (element === 12) ? obj.doze += 1 : 0;
        (element === 13) ? obj.treze += 1 : 0;
        (element === 14) ? obj.quatorze += 1 : 0;
        (element === 15) ? obj.quinze += 1 : 0
    })
}

//Esta é minha função main
function elementosValidos (vetor) {
    if (typeof vetor !== "object" || !vetor) return JSON.stringify(ObjectIntervalo())
    let qtd = vetor.reduce((cont, atual) => (atual >= 0 && atual <= 15) ? ++cont : cont, 0)
    let groupNumb = ObjectIntervalo();
    setObject(vetor, groupNumb)
    return JSON.stringify(groupNumb);
}

module.exports = {elementosValidos}