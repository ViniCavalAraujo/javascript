async function buscarDados() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const dados = await resposta.json()

    console.log(dados)
    const container = document.querySelector('#resultado')
    container.innerHTML = `<h2>${dados.name}</h2>
        <p>E-mail: ${dados.email}</p>
        <p>Endereço: ${dados.address.city}
        <p>Telefone: ${dados.phone}</p>
        <p>Compania: ${dados.company.name}`
}

buscarDados()