let filmes = ['carros', 'shrek']
let txtf = document.getElementById('txtf')
let res = document.getElementById('res')


function procurar() {
    let txtprocurar = txtf.value

    if (txtprocurar == '') {
        res.innerHTML = 'Preencha algo.'
        return
    }
    
     if (filmeExiste(txtprocurar)) {
        res.innerHTML = `O filme ${txtprocurar} já está cadastrado`
    } else {
        res.innerHTML = `O filme ${txtprocurar} não foi encontrado`
    }
}

function adicionar() {
    let atual_film = txtf.value
    
    if (filmeExiste(atual_film)) {
        res.innerHTML = `Filme ${atual_film} já foi adicionado`
    } else {
        filmes.push(atual_film)
        res.innerHTML = `Filme ${atual_film} adicionado`
    }

    
}


function mostrar() {
    res.innerHTML = `Filmes cadastrados: <br>${filmes   }`
}


function filmeExiste(nome) {
    return filmes.indexOf(nome) != -1
}