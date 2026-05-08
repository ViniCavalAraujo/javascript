//declaração para poder resetar o texto de termos na linha 39
var divtermos = document.getElementById('cont-termos')
var ptexto = document.createElement('p')


//função de validação dos campos
function validacao() {
    var nomeinput = document.getElementById('nome')
    var nome = nomeinput.value
    var email_Input = document.getElementById('email')
    var email = email_Input.value
    var linguagem = document.querySelectorAll('input[name="ling"]')
    var selecionado = false
    var termo = document.getElementById('termos')

    if (nomeinput.value == '' ) {
        alert('Preencha o nome')
    } else if (email_Input.value == '') {
        alert('Preencha o e-mail')
    } else {
        for (var i = 0; i < linguagem.length; i++) {
            if (linguagem[i].checked) {
                selecionado = true
            }
        }
        if (!selecionado) {
            alert('Selecione alguma linguagem')
        } else {
            if (!termo.checked) {
                alert('Os termos são obrigatórios')
            } else {
                alert('Enviado')
                nomeinput.value = ''
                email_Input.value = ''
                termo.checked = false
                for (var i = 0; i < linguagem.length; i++) {
                    linguagem[i].checked = false
                }
                ptexto.remove()
            } 
        }
        
    }
}

//função para visualizar os termos
function termos() {
    var pExiste = document.getElementById('textotermos') 
    if (pExiste) {
        pExiste.remove()
    } else {
        ptexto.setAttribute('id', 'textotermos')
        ptexto.innerHTML = 'Ao clicar em enviar você concorda com os termos. <br>Os dados são utilizados para fins de pesquisa.'
        divtermos.appendChild(ptexto)
    }
}