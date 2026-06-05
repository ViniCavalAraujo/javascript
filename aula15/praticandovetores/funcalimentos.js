function vetfrutas(frutas) {
    let mais_letras = frutas[0]
    let menos_letras = frutas[0]
    let desempate_mais = [...frutas]
    let desempate_menos = [...frutas]

    for (let i = 0; i < frutas.length; i++) {

        if (frutas[i].length == mais_letras.length) {
            desempate_mais.sort((a,b) => a.localeCompare(b))
        }

         if (frutas[i].length == menos_letras.length) {
            desempate_menos.sort((a,b) => a.localeCompare(b))
        }

        if (frutas[i].length > mais_letras.length) {
            mais_letras = frutas[i]
        }

        if (frutas[i].length < menos_letras.length) {
            menos_letras = frutas[i]
        }

        if (desempate_menos.length == menos_letras.length) {
            desempate_menos = menos_letras
        }
    }

    // if (desempate_mais[0].length == mais_letras.length) {
    //     console.log(`Fruta com mais letrass ${desempate_mais[0]}`)
    //     console.log(`${desempate_mais}`)
    // } else {
    //     console.log(`Fruta com mais letras ${mais_letras}`)
    // }

    

    //  if (desempate_menos[0].length == menos_letras.length) {
    //     console.log(`Fruta com menos letrass ${desempate_menos}`)
    // } else {
    //     console.log(`Fruta com menos letras ${menos_letras}`)
    //     console.log(`${desempate_menos}`)
    // }
    
    console.log('menos letras'+ menos_letras)

}


let frutas = ['avestr','abacaxiii', 'banana', 'uva', 'kiwi', 'caju', 'morangooo', 'ave']
vetfrutas(frutas)
