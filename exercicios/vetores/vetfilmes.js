function vetfilmes (filmes) {
    let maisletras = filmes[0]
    let menosletras = filmes[0]
    let maisde5 = []
    let menosde5 = []

    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].length >= 5) {
            maisde5.push(filmes[i])
        } else {
            menosde5.push(filmes[i])
        }

        if (filmes[i].length > maisletras.length) {
            maisletras = filmes[i]
        }

        if (filmes[i].length < menosletras.length) {
            menosletras = filmes[i]
        }
    }

    return {
        maior: maisletras,
        menor: menosletras,
        quantidade: filmes.length,
        maiorquecinco: maisde5,
        menorquecinco: menosde5,
        qtdemaiorcinco: maisde5.length,
        qtdemenorcinco: menosde5.length
    }
}

let filmes = ['carros', 'homem de ferro', 'gigantes de aço', 'shrek', 'avatar', 'duna']
let res = vetfilmes(filmes)
console.log(`Maior palavra: ${res.maior}`)
console.log(`Menos letras: ${res.menor}`)
console.log(`Quantidade de filmes: ${res.quantidade}`)
console.log(`Filmes com mais de 5 letras: ${res.maiorquecinco}. Sendo ${res.qtdemaiorcinco} filmes no total`)
console.log(`Filmes com menos de 5 letras: ${res.menorquecinco}. Sendo ${res.qtdemenorcinco} filmes no total`)
