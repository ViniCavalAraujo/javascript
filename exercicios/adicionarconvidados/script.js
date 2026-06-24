let convidados = ['vin']
function procurar() {
    let txtconv = document.getElementById('txt')
    let conv = txtconv.value
    let res = document.getElementById('res')

    //verifica se o campo está vazio e retorna encerrando a função
    if (txtconv.value == '') {
        res.innerHTML = `Preencha o campo`
        return
    }

    //verifica se o valor digitado já existe no vetor
    if (convidados.indexOf(conv) != -1) {
        res.innerHTML= `Convidado <strong>${conv}</strong> já existe`
    } else {
        res.innerHTML= `Convidado <strong>${conv}</strong> não encontrado, clique em <strong>Adicionar</strong>`
        let btExiste = document.getElementById('but')
        if(btExiste) {
            btExiste.remove()
        }
        let button = document.createElement('input')
        button.setAttribute('type', 'button')
        button.setAttribute('id', 'but')
        button.setAttribute('value', 'Adicionar')
        document.body.appendChild(button)

        //configuração do novo botão
        button.addEventListener('click', function() {
            let convAtual = txtconv.value
            if (convAtual.length < 3 || convAtual.length > 10) {
                res.innerHTML = `O nome deve ter entre 3 a 10 letras`
                txtconv.focus()
            } else {
                adicionar(convAtual)
                res.innerHTML = `Convidado <strong>${convAtual}</strong> adicionado, agora são ${convidados.length} convidados`
                txtconv.value = ''
                button.style.display = 'none'
                txtconv.focus()
            }    
        })
    }
}
function adicionar(convidado) {
    convidados.push(convidado)
}



