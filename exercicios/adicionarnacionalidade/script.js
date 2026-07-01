let nacionalidade = []
let option_nac = document.getElementById('nac')
let res = document.getElementById('res')

function nacExiste(nac) {
    return nacionalidade.indexOf(nac) != -1
}

function nacSelecionado(no_select) {
    return no_select == ''
}

function enviar() {
    nac_enviar = option_nac.value

    if (nacSelecionado(nac_enviar)) {
        alert('Selecione uma opção')
        return
    }

    if (nacionalidade.length == 0) {
        alert('É necessário adicionar primeiro')
        return
    }

    if (!nacExiste(nac_enviar)) {
        alert('É necessário enviar o correspondende do qual adicionou')
        option_nac.value = ''
        option_nac.focus()
        res.innerHTML = ''
        return
    }

    res.innerHTML = 'Enviado'
    option_nac.value = ''
    nacionalidade = []
}

function adicionar() {
    nac_add = option_nac.value

    if (nacSelecionado(nac_add)) {
        alert('Selecione uma opção')
        return
    }

    if (nacExiste(nac_add)) {
        res.innerHTML = `A opção já foi adicionada`
    } else {
        nacionalidade.push(nac_add)
        res.innerHTML = `A opção ${nac_add} foi adicionada`
    }
}
