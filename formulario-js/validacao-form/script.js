//captação do formulário
const form = document.querySelector('#dados-form') 


//evento de submit do formulário 
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const dados = {
        nomeUsuario: document.querySelector('#nome').value,
        emailUsuario: document.querySelector('#email').value,
        telUsuario: document.querySelector('#telefone').value
    }


    //validações dos inputs
    if (dados.nomeUsuario.trim() === '' || dados.emailUsuario.trim() === '' || dados.telUsuario.trim() === '') {
        alert('Preencha todos os campos')
        return
    }

    if (!validarNome(dados.nomeUsuario)) {
        alert('nome inválido')
        return
    }

    if (!validarEmail(dados.emailUsuario)) {
        alert('e-mail inválido')
        return
    }

    if (!validarTelefone(dados.telUsuario)) {
        alert('telefone inválido')
        return
    }

    alert('dados enviados')
    form.reset()
})


//funções regex para verificação dos inputs
const validarNome = (nome) => {
    const regexNome = /^[a-zA-ZÀ-ÿ\s]+$/
    return regexNome.test(nome)
}

const validarEmail = (email) => {
    const regexEmail = /^[^\s]+@[^\s]+\.[^\s]+$/
    return regexEmail.test(email)
}

const validarTelefone = (telefone) => {
    const apenasNumeros = telefone.replace(/[^0-9]/g, "")
    const regexNome = /^[0-9]{10,11}$/

    return regexNome.test(apenasNumeros)
}