let estado = []
let est = document.getElementById('est')
let res = document.getElementById('res')

function estadoExiste(est_existe) {
    return estado.indexOf(est_existe) != -1
}

function no_option(no_opt) {
    return no_opt == ''
}

function enviar() {
    let envio = est.value

    if (no_option(envio)) {
        alert('Selecione uma opção')
        return
    }

    if (estado.length == 0) {
        alert('Adicione uma opção antes de enviar')
        return
    } 

    //verifica se o estado selecionado existe no vetor
    if (!estadoExiste(envio)) {
        alert('Envie o estado correspondente com o adicionado')
        limpar()
        return
    } 

    alert('Enviado')
    limpar()
}

function adicionar() {
    let est_add = est.value

    if (no_option(est_add)) {
        alert('Selecione uma opção')
        return
    }

    if (estadoExiste(est_add)) {
        res.innerHTML = `O estado ${est_add} já foi adicionado`
    } else {
        estado.push(est_add)
        res.innerHTML = `Estado ${est_add} adicionado com sucesso`
    }
}

function limpar() {
    est.value = ''
    res.innerHTML = ''
}