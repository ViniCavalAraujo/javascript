let livros = ['Harry Potter','Duna']
let txtinput = document.getElementById('txtl')
let res = document.getElementById('res')

function procurar() {
    let txtlv = txtinput.value

    if (txtinput.value == '') {
        res.innerHTML = 'Preencha algo'
        return
    }

    if (livros.indexOf(txtlv) != -1) {
        res.innerHTML = `Livro ${txtlv} já existe`
    } else {
        res.innerHTML = `Livro ${txtlv} não encontrado, você pode <strong>Adicionar</strong>`
    }
}


function adicionar() {
    let txtatualizado = txtinput.value
    if (livros.indexOf(txtatualizado) != -1) {
        res.innerHTML = `Livro ${txtatualizado} já foi adicionado...`
    } else {
        livros.push(txtatualizado)
        res.innerHTML = `Livro ${txtatualizado} adicionado! Clique em <strong>Mostrar</strong>`
    }   
}

function mostrar() {
    res.innerHTML = `Livros cadastrados: <br><strong>${livros}</strong>`
}

