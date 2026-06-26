tarefa = ['estudar']
let txt = document.getElementById('txt')
let res = document.getElementById('res')


function adicionar() {
    let txtadd = txt.value

    if (txt.value == '') {
        res.innerHTML = `Preencha o campo`
        return
    }

    if (tarefaExiste(txtadd)) {
        res.innerHTML = `Essa tarefa já existe`
    } else {
        tarefa.push(txtadd)
        res.innerHTML = `Tarefa ${txtadd} adicionada`
        limpar(txt)
    }
}

function remover() {
    let txtremove = txt.value

    if (txt.value == '') {
        res.innerHTML = `Preencha o campo`
        return
    }


    if (tarefaExiste(txtremove)) {
        let posicao = tarefa.indexOf(txtremove)
        tarefa.splice(posicao, 1)
        res.innerHTML = `Tarefa removida`
    } else {
        res.innerHTML = `Tarefa não encontrada`
    }
}


function listar() {
    res.innerHTML = `Tarefas: <br> ${tarefa}`
    limpar(txt)
}


function tarefaExiste(trf) {
   return tarefa.indexOf(trf) != -1
}

function limpar(texto) {
    texto.value = ''
}

