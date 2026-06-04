function analisar(numeros) {
    let somatotal = 0
    let media = 0
    let maior = numeros[0]
    let menor = numeros[0]
    let pares = 0
    let impares = 0

    for (let i = 0; i < numeros.length; i++) {
        somatotal += numeros[i]

        if (numeros[i] > maior) {
            maior = numeros[i]
        }

        if (numeros[i] < menor) {
            menor = numeros[i]
        }

        if (numeros[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    
    media = somatotal / numeros.length

    console.log(`Quantidade de elementos: ${numeros.length}`)
    console.log(`Soma total: ${somatotal}`)
    console.log(`Média: ${media}`)
    console.log(`Maior número: ${maior}`)
    console.log(`Menor número: ${menor}`)
    console.log(`Quantidade de pares: ${pares}`)
    console.log(`Quantidade de ímpares: ${impares}`)
}


let numeros = [10, 5, 8, 20, 3]
analisar(numeros)