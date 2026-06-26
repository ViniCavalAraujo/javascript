let nome = ['vini']
let txt = document.getElementById('txt')
let res = document.getElementById('res')

function nomeExiste(name) {
    return nome.indexOf(name) != -1
} 

function remover() {
    let txtremove = txt.value

    if (nomeExiste(txtremove)) {
        let posicao = nome.indexOf(txtremove)
        nome.splice(posicao,1)
        res.innerHTML = `nome ${txtremove} removido`
    }
}

function mostrar() {
    res.innerHTML = `nomes: ${nome}`
}