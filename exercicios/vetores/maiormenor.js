function vetanimais(animais) {
    let maior = animais[0]
    let menor = animais[0]

    for (let i = 0; i < animais.length; i++) {
        if (animais[i].length > maior.length) {
            maior = animais[i]
        }
        if (animais[i].length < menor.length) {
            menor = animais[i]
        }
    }


    return {
        maisletras: maior, 
        menosletras: menor
    }

}

let animais = ['gato', 'cachorro', 'pato', 'sapo', 'gavião', 'pombo', 'tubarão']
console.log(`Palavra com mais letras: ${vetanimais(animais).maisletras}`)
console.log(`Palavra com menos letras: ${vetanimais(animais).menosletras}`)