function mudarTema() {
    var msgExiste = document.getElementById('mensagem')
    var tema = document.getElementsByName('tema')
    var label = document.getElementsByClassName('labels')
    var msg = document.createElement('p')
    msg.setAttribute('id', 'mensagem')

    if (tema[0].checked) {
        if (msgExiste) {
            msgExiste.remove()
        }
        for (var i=0; i<label.length; i++) {
            label[i].style.color = 'black'
        }
        msg.style.cssText = 'color: red;'
        msg.innerHTML = `Está claro!`
        document.body.style.background = 'yellow'
        document.body.appendChild(msg)
    } else if (tema[1].checked) {
        if (msgExiste) {
            msgExiste.remove()
        }
       
        for (var i = 0; i < label.length; i++) {
        label[i].style.color = 'white'
        }

        msg.style.cssText = 'color: white;'
        msg.innerHTML = `Está escuro!`
        document.body.style.background = 'black'
        document.body.appendChild(msg)
    } else if (tema[2].checked){
        if (msgExiste) {
            msgExiste.remove()
        }
        for (var i=0; i<label.length; i++) {
            label[i].style.color = 'black'
        }
        msg.style.cssText = 'color: yellow;'
        msg.innerHTML = `Está colorido!`
        document.body.style.cssText = 'background: linear-gradient(to right, red, green); '
        document.body.appendChild(msg)
    }
}