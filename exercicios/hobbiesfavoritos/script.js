function validacao() {
    var option = document.querySelectorAll('input[name="hobbie"]')
    var otheroption = document.getElementById('outro')
    var othertext = document.getElementById('othobbie')
    
    var totalmarcado = 0

    for (var i = 0; i < option.length; i++) {
        if(option[i].checked) {
            totalmarcado++
        }
    }

    if (otheroption.checked) {
        totalmarcado++
    }


    if (totalmarcado > 3) {
        alert('Máximo de 3 opções')
        return
    }

    if (othertext.value != '' && !otheroption.checked) {
        alert('Marque a opção "outro"')
        return
    }

    if (otheroption.checked && othertext.value == '') { 
        alert('Preencha o texto')
        return
    }

    if (totalmarcado == 0) {
        alert('Marque alguma opção')
        return
    }

    alert('Enviado')
    limparDados()
}


function limparDados() {
    var option = document.querySelectorAll('input[name="hobbie"]')
    var otheroption = document.getElementById('outro')
    var othertext = document.getElementById('othobbie')

    for (var i = 0; i < option.length; i++) {
        option[i].checked = false
    }
    
    otheroption.checked = false
    othertext.value = ''
}