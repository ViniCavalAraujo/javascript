function vetprofissoes(profissoes) {
    let maior = profissoes[0]
    let menor = profissoes[0]
    let igual_maior = []
    let menor_igual = []

    for (let i = 0; i < profissoes.length; i++) {
        if (profissoes[i].length > maior.length) {
            maior = profissoes[i]

            igual_maior = []
            igual_maior.push(profissoes[i])
        }

        else if (profissoes[i].length == maior.length) {
            igual_maior.push(profissoes[i])
        }

        if (profissoes[i].length < menor.length) {
            menor = profissoes[i]

            menor_igual = []
            menor_igual.push(profissoes[i])
        }

        else if (profissoes[i].length == menor.length) {
            menor_igual.push(profissoes[i])
        }
    }

    return {
        maisletras: maior,
        menosletras: menor,
        iguaismaior: igual_maior,
        iguaismenor: menor_igual
    }
}


let profissoes = ['médico', 'artista', 'atleta', 'atendente', 'mecânico', 'músico', 'engenheiro', 'designer']

let resultado = vetprofissoes(profissoes)
console.log(`Palavra com mais letras: ${resultado.menosletras}`)