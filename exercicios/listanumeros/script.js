let numeros = []
let inputnum = document.getElementById('num')
let res = document.getElementById('res')
let p = document.createElement('p')

function numExiste(valor_num) {
    return numeros.indexOf(valor_num) != -1
}

function adicionar() {
    let txtadd = Number(inputnum.value)

    if (campoVazio(inputnum)) {
        alert('Preencha o campo')
        campofocus(inputnum)
        return
    }

    if (numeracao(txtadd)) {
        alert('Número inválido: de 0 a 100')
        campofocus(inputnum)
        return
    }

    if (numExiste(txtadd) ) {
        res.innerHTML = `<strong>O número ${txtadd} já está cadastrado</strong>`
    } else {
        numeros.push(txtadd)
        p.innerHTML = `O número ${txtadd} foi adicionado`
        document.body.appendChild(p)
    }
}

function finalizar() {
    p.innerHTML = ''
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0
    let media = 0

    if (numeros.length == 0) {
        alert('Adicione números antes de finalizar')
        return
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
        soma += numeros[i]
    }
    media = soma / numeros.length
    res.innerHTML = `Ao todo temos ${numeros.length} números cadastrados que são: ${numeros}.<br>`
    res.innerHTML += `O maior número é: ${maior}<br>`
    res.innerHTML += `O menor número é: ${menor}<br>`
    res.innerHTML += `Somando todos os valores temos: ${soma}<br>`
    res.innerHTML += `A média dos valores é: ${media}`
}

function numeracao(nume) {
    return nume < 0 || nume > 100
}

function campofocus(fc) {
    fc.focus()
}

function campoVazio(campo) {
    return campo.value == ''
}