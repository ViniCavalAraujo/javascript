const form = document.querySelector('#form')
const idinput = document.querySelector('#idinput')
const res = document.querySelector('#res')
const bt_mostrar = document.querySelector('#bt-mostrar')
const res_itens = document.querySelector('#res-itens')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (idinput.value.trim() === '') {
        alert('Insira um número')
        return
    }

    if (idinput.value < 1 || idinput.value > 100) {
        alert('Número fora do intervalo')
        return
    }

    res_itens.innerHTML = ''
    res_itens.classList.remove('ativo')
    buscarId()
})

bt_mostrar.addEventListener('click', () => {
    listarItens()
})

async function buscarId() {
    try {
        res.innerHTML = 'carregando...'
        const idpost = idinput.value
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${idpost}`)
        const dados = await resposta.json()
        res.innerHTML = `<h2>Id: ${dados.id}</h2><h3>Título: ${dados.title}</h3><p>Corpo: ${dados.body}</p>`
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

async function listarItens() {
    try {
        res.innerHTML = ''
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dados = await resposta.json()
        //filter para selecionar somente os ids pares da api
        const lista = dados.filter((itens) => itens.id % 2 == 0).map((itens) => `<pre>${JSON.stringify(itens, null, 2)}`)
        res_itens.innerHTML = `<h2>Posts com id par</h2>${lista.join("")}`
        res_itens.classList.toggle('ativo')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}