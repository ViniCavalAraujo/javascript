let pais = ['brasil']
let txtp = document.querySelector('input#txtp')
let res = document.querySelector('p#res')

function procurar() {
    let txtproc = txtp.value.toLowerCase()

    if (campoVazio(txtproc)) {
        return
    }

    if (nomeExiste(txtproc)) {
        res.innerHTML = `O país <strong>${txtproc}</strong> já está cadastrado`
        limpar(txtp)
    } else {
        res.innerHTML = `O país <strong>${txtproc}</strong> não foi encontrado. <strong>Adicione</strong>`
    }
}

function adicionar() {
    let txtadd = txtp.value

    if (nomeExiste(txtadd)) {
        res.innerHTML = `O país <strong>${txtadd}</strong> já foi cadastrado anteriormente.`
    } else {
        pais.push(txtadd)
        res.innerHTML = `O país <strong>${txtadd}</strong> foi adicionado, clique em <strong>Mostrar</strong>`
        limpar(txtp)
    }
}

function mostrar() {
    res.innerHTML = `Países cadastrados: <br>${pais}`
    limpar(txtp)
}

function nomeExiste(nome) {
    return pais.indexOf(nome) != -1
}

function limpar(texto) {
    texto.value = ''
}

function campoVazio(campo) {
    if (campo == '') {
        res.innerHTML = 'Preencha o campo'
        txtp.focus()
    }
}