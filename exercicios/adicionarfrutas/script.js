let frutas = ['maçã', 'laranja']
let txtf = document.getElementById('txtf')
let res = document.getElementById('res')

function procurar() {
    let txtprocurar = txtf.value

    if (txtprocurar == '') {
        res.innerHTML = 'Preencha'
        return
    }

    if (nomeExiste(txtprocurar)) {
        res.innerHTML = `Fruta ${txtprocurar} já existe`
    } else {
        res.innerHTML = `Fruta ${txtprocurar} não encontrada, clique em <strong>Adicionar</strong>`
    }
}


function adicionar() {
    let txtadd = txtf.value

    if (nomeExiste(txtadd)) {
        res.innerHTML = `A fruta ${txtadd} já está cadastrada.`
    } else {
        frutas.push(txtadd)
        res.innerHTML = `A fruta ${txtadd} foi adicionada`
    }
}


function mostrar() {
    res.innerHTML = `Frutas cadastradas: <br>${frutas}`
}


function nomeExiste(nome) {
    return frutas.indexOf(nome) != -1
}