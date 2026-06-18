function sum_media(numeros) {
    let soma = 0
    let media = 0

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }


    return {
        somatotal: soma,
        mediatotal: soma / numeros.length
    }
}

let numeros = [10, 5, 8, 20, 3]
console.log(`Soma total: ${sum_media(numeros).somatotal}`)
console.log(`Média: ${sum_media(numeros).mediatotal.toFixed(2)}`)