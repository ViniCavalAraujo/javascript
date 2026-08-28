async function buscarUsers() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users") //api pública
    const dados = await resposta.json()

    const container = document.querySelector('#res')

    const dadosJuntos = dados.map((usuario) => {
        return `<h2>Nome: ${usuario.name}</h2><p>E-mail: ${usuario.email}</p>`
    })
    container.innerHTML = dadosJuntos.join("")
}

buscarUsers()