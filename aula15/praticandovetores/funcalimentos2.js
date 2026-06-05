function vetfrutas(frutas) {
    let maior = frutas[0]
    let menor = frutas[0]
    let qtde_iguais_maior = 0
    let qtde_iguais_menor = 0 
    let iguais_maior = []
    let iguais_menor = []

    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].length > maior.length) {
           maior = frutas[i]

           iguais_maior = []
           iguais_maior.push(frutas[i])
        }

        else if (frutas[i].length == maior.length) {
            iguais_maior.push(frutas[i])
            qtde_iguais_maior++
        }


        if (frutas[i].length < menor.length) {
           menor = frutas[i]

        //    iguais_menor = []
           iguais_menor.push(frutas[i])
        }

        else if (frutas[i].length == menor.length) {
            iguais_menor.push(frutas[i])
            qtde_iguais_menor++
        }
    }

    console.log(`Quantidade de repetidas maiores: ${iguais_maior.length} e quais foram: ${iguais_maior}`)

     console.log(`Quantidade de repetidas menores: ${qtde_iguais_menor} e quais foram: ${iguais_menor}`)
   
    
}


let frutas = ['eva','abacaxi', 'banana', 'uva', 'kiwi', 'caju', 'morango', 'ave', 'mel', 'morang2']
vetfrutas(frutas)