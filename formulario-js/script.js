const formulario = document.querySelector('#formulario')

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    const dados = {
        nome: document.querySelector('#nome').value,
        sobrenome: document.querySelector('#sobrenome').value,
        email: document.querySelector('#email').value,
        telefone: document.querySelector('#telefone').value
    }

    console.log(dados)
})