let profissao = []
let res = document.getElementById('res')
let opt = document.getElementById('opt')

function profExiste(prof) {
    return profissao.indexOf(prof) != -1
}

function enviar() {
    let profenv = opt.value
    if (no_option(profenv)) {
        alert('Selecione uma opção')
        return
    }
    

    if (profissao.length == 0) {
        res.innerHTML = 'É necessário adicionar uma opção antes de enviar.'
    } else {
        res.innerHTML = 'Enviado'
    }
}

function adicionar() {
    let profadd = opt.value

    if (no_option(profadd)) {
        alert('Selecione uma opção')
        return
    }

    if (profExiste(profadd)) {
        res.innerHTML = `Profissão ${profadd} já foi adicionado`
    } else {
        profissao.push(profadd)
        res.innerHTML = `Profissão ${profadd} foi adicionado`
    }
}

function reset() {
    opt.value = ''
    res.innerHTML = ''
}

function no_option(no_opt) {
    return no_opt == ''
}