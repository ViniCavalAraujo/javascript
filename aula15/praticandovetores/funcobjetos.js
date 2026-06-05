function vetobjetos(objetos) {
    let maior = objetos[0]
    let menor = objetos[0]
    let igualmaior = []
    let igualmenor = []
    let palavrasGrandes = []
    let palavrasPequenas = []

    for (let i = 0; i < objetos.length; i++) {

        if (objetos[i].length > maior.length) {
            maior = objetos[i]

            igualmaior = []
            igualmaior.push(objetos[i])
        }

        else if (objetos[i].length == maior.length) {
            igualmaior.push(objetos[i])
        }

        if (objetos[i].length < menor.length) {
            menor = objetos[i]
            
            igualmenor = []
            igualmenor.push(objetos[i])
        }

        else if (objetos[i].length == menor.length) {
            igualmenor.push(objetos[i])
        }

        if (objetos[i].length > 5) {
            palavrasGrandes.push(objetos[i])
        } else {
            palavrasPequenas.push(objetos[i])
        }
    }

    return {
        maispalavras: maior,
        menospalavras: menor,
        maisigual: igualmaior,
        menosigual: igualmenor,
        repetidasMaior: igualmaior.length,
        repetidasMenor: igualmenor.length,
        pgrandes: palavrasGrandes,
        smallpalavras: palavrasPequenas
    }
}

let objetos = ['cadeira', 'lápis', 'mesa', 'ventilador', 'desodorante', 'travesseiro', 'camiseta', 'capacete', 'gel', 'baú']
let resultado = vetobjetos(objetos)


console.log(`Palavras grandes: ${resultado.pgrandes}`)
console.log(`Palavras pequenas: ${resultado.smallpalavras}`)
console.log(`A palavra com mais letras é: ${resultado.maispalavras}`)
console.log(`A palavra com menos letras é: ${resultado.menospalavras}`)
if (resultado.maisigual.length > 1) {
    console.log(`Palavras com quantidades de letras iguais: ${resultado.maisigual}. Sendo ${resultado.repetidasMaior} palavras`)
}

if (resultado.menosigual.length > 1) {
    console.log(`Palavras com quantidades de letras iguais: ${resultado.menosigual}. Sendo ${resultado.repetidasMenor} palavras`)
}