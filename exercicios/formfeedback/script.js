function validacao() {
    var nome = document.getElementById('nome')
    var notas = document.querySelectorAll('input[name="nota"]')
    var cmtopcional = document.getElementById('coment')
    var email = document.getElementById('email')
    var txtemail = document.getElementById('campoemail')
    var totalnotas = 0 

    if (nome.value === '') {
        alert('Preencha o nome')
        return
    }

    for (var i = 0; i < notas.length; i++) {
        if (notas[i].checked) {
            totalnotas++
        }
    }

    if (totalnotas == 0) {
        alert('Marque ao menos uma nota')
        return
    }

    if (totalnotas > 1) {
        alert('Marque apenas uma nota')
        return
    }

    if (email.checked && txtemail.value === '') {
        alert('Preencha o e-mail')
        return
    }

    alert('Enviado')
    limparDados()

}


function mostrarEmail() {
    var email = document.getElementById('email')
    var txtemail = document.getElementById('campoemail')
    

    if (email.checked) {
        txtemail.style.cssText = 'display: block;'
    } else {
        txtemail.style.cssText = 'display: none;'
        txtemail.value = ''
    }
}


function limparDados() {
    var nome = document.getElementById('nome')
    var notas = document.querySelectorAll('input[name="nota"]')
    var cmtopcional = document.getElementById('coment')
    var email = document.getElementById('email')
    var txtemail = document.getElementById('campoemail')

    nome.value = ''
    cmtopcional.value = ''
    email.checked = false
    txtemail.value = ''

    for (var i = 0; i < notas.length; i++) {
        notas[i].checked = false
    }
    comentsFeedback() //chamada da função para limpar o comentário do texto de feedbacks
}

function comentsFeedback() {
    var notas = document.querySelectorAll('input[name="nota"]') 
    var txtExiste = document.getElementById('comentarios')
    if (txtExiste) {
        txtExiste.remove()
    }
    var texto = document.createElement('p')
    texto.setAttribute('id', 'comentarios')
   

    
        if (notas[0].checked) {
            texto.innerHTML = 'Lamentamos a experiência'
        }
        else if (notas[1].checked) {
            texto.innerHTML = 'Agradecemos o feedback, iremos melhorar'
        }
        else if (notas[2].checked) {
            texto.innerHTML = 'Sua opinião importa!'
        }
        else if (notas[3].checked) {
            texto.innerHTML = 'Agradecemos o feedback!'
        }
        else if (notas[4].checked) {
            texto.innerHTML = 'Agradecemos o feedback! Obrigado!'
        }
    
    
    document.body.appendChild(texto)
}