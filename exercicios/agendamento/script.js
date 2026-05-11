var bt = document.getElementById('bt')
bt.addEventListener('click', validacao)


//validação geral dos dados
function validacao() {
    var ipnome = document.getElementById('nome')
    var ipidade = document.getElementById('idade')
    var idade = Number(ipidade.value)
    var option = document.querySelectorAll('input[name="periodo"]')
    var option_horario = document.getElementById('horario')
    var texthorario = document.getElementById('txthorario')
    var confirm_email = document.getElementById('cfemail')
    var totalmarcado = 0
    
    
    if (ipnome.value === '') {
        alert('Preencha o nome')
        return
    }

    if (ipidade.value === '') {
        alert('Preencha a idade')
        return
    }

    if (idade < 0 || idade > 120) {
        alert('Idade inválida')
        return
    }

    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            totalmarcado++
        }
    }

    if (option_horario.checked) {
        totalmarcado++
    }

    if (totalmarcado == 0) {
        alert('Selecione um período')
        return
    }

    if (totalmarcado > 1) {
        alert('Selecione apenas um período')
        return
    }

    if (option_horario.checked && texthorario.value === '') {
        alert('Preenchimento obrigatório')
        return
    }

    if (texthorario.value != '' && !option_horario.checked) {
        alert('Necessário marcar a opção "outro"')
        return
    }

    if (!confirm_email.checked) {
        alert('É necessário confirmação por e-mail')
        return
    }

    alert('Enviado')
    limparDados()
}


//função para alternância do campo da opção ''outro horário''
function mostrarTexto() {
    var mt_texto = document.getElementById('txthorario')
    var option_horario = document.getElementById('horario')

    if (option_horario.checked) {
        mt_texto.style.cssText = 'display: block;'
    } else {
        mt_texto.style.cssText = 'display: none;'
        mt_texto.value = '' 
    }
}

//função para limpar os dados após envio do formulário
function limparDados() {
    var ipnome = document.getElementById('nome')
    var ipidade = document.getElementById('idade')
    var option = document.querySelectorAll('input[name="periodo"]')
    var option_horario = document.getElementById('horario')
    var texthorario = document.getElementById('txthorario')
    var confirm_email = document.getElementById('cfemail')
    
    ipnome.value = ''
    ipidade.value = ''
    option_horario.checked = false
    texthorario.value = ''
    confirm_email.checked = false
    texthorario.style.cssText = 'display: none;' 

    for (var i = 0; i < option.length; i++) {
        option[i].checked = false
    }
}