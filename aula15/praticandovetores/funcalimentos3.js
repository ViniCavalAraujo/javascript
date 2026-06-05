function vetalimentos(alimentos) {
    let maior_letras = alimentos[0]
    let menor_letras = alimentos[0]
    let letrasiguais_maior = []
    let letrasiguais_menor = []

    for (let i = 0; i < alimentos.length; i++) {
        if (alimentos[i].length > maior_letras.length) {
            maior_letras = alimentos[i]

            letrasiguais_maior = []
            letrasiguais_maior.push(alimentos[i])
        }

        else if (alimentos[i].length == maior_letras.length) {
            letrasiguais_maior.push(alimentos[i])
        }

        if (alimentos[i].length < menor_letras.length) {
            menor_letras = alimentos[i]

            letrasiguais_menor = []
            letrasiguais_menor.push(alimentos[i])
        }

        else if (alimentos[i].length == menor_letras.length) {
            letrasiguais_menor.push(alimentos[i])
        }
    }



    return {
        maisletras: maior_letras,
        menosletras: menor_letras,
        iguais_maior: letrasiguais_maior,
        iguais_menor: letrasiguais_menor
    }
}

let alimentos = ['carne', 'cebola', 'arroz', 'feijão', 'maçã', 'beterraba', 'tomate', 'ave', 'sal']
let resultado = vetalimentos(alimentos)

console.log(`Palavra com mais letras: ${resultado.maisletras}`)
console.log(`Palavra com menos letras: ${resultado.menosletras}`)

if (resultado.iguais_maior.length > 1) {
    console.log(`Repetidas palavras maiores: ${resultado.iguais_maior}`)
}
if (resultado.iguais_menor.length > 1) {
    console.log(`Repetidas palavras menores: ${resultado.iguais_menor}`)
}