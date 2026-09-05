const form = document.querySelector('#form')
const idinput = document.querySelector('#idinput')
const res = document.querySelector('#res')
const res_lista = document.querySelector('#res-lista')
const bt_mostrar = document.querySelector('#bt-mostrar')

form.addEventListener('submit', (event) => {
    event.preventDefault()


    if (idinput.value.trim() === '') {
        alert('Insira um número')
        idinput.focus()
        return
    }
    if (idinput.value < 1 || idinput.value > 200) {
        alert('Número fora do valor informado')
        idinput.focus()
        return
    }
    /* caso o botão ''mostrar todos os itens'' esteja ativo com os itens na tela, ao buscar um id e enviar, irá mostrar somente o bloco do id digitado e apagar os itens da lista na tela */
    res_lista.innerHTML = ''
    res_lista.classList.remove('ativo')

    buscarId()
})

bt_mostrar.addEventListener('click', () => {
    mostrar()
})


//função para buscar o id digitado da api
async function buscarId() {
    try {
        res.innerHTML = 'carregando...'
        const id = idinput.value
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`) //api pública
        const dados = await resposta.json()
        res.innerHTML = `<h2>Id: ${dados.id}</h2><h3>Título: ${dados.title}</h3><p>Status: ${dados.completed}</p>`
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

//função para listar todo os itens da api
async function mostrar() {
    try {
        res.innerHTML = ''
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const dados = await resposta.json()
        const lista = dados.map((itens) => `<pre>${JSON.stringify(itens, null, 2)}`)
        res_lista.innerHTML = lista.join("")
        res_lista.classList.toggle('ativo')
    } catch (error) {
        
    }
}