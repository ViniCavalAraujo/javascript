var bt = document.getElementById('bt')
bt.addEventListener('click', validarTurno)


function validarTurno() {
    var pExiste = document.getElementById('par')
    if (pExiste) {
        pExiste.remove()
    }

    var radioturno = document.getElementsByName('turno')
    var msg = document.createElement('p')
    msg.setAttribute('id', 'par')

    if (radioturno[0].checked) {
        msg.innerHTML = 'Bom dia!'
        document.body.appendChild(msg)
    } else if (radioturno[1].checked) {
        msg.innerHTML = 'Boa tarde!'
        document.body.appendChild(msg)
    } else {
        msg.innerHTML = 'Boa noite!'
        document.body.appendChild(msg)
    }
}