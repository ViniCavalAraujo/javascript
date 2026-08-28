async function buscarUsers() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users") //api pública
    const dados = await resposta.json()

    const container = document.querySelector('#res')

    let nomes = ''

    for (let i = 0; i < dados.length; i++) {
        nomes += dados[i]
    }

    container.innerHTML = nomes
}

buscarUsers()