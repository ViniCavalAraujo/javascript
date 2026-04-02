function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.querySelector('#foto img')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minutos}`
if (hora >= 0 && hora < 12) {
    msg.innerHTML = 'BOM DIA'
    img.src = 'imagens/manha.jpg'
    document.body.style.background = 'yellow'

} else if (hora >= 12 && hora < 18) {
    msg.innerHTML = 'BOA TARDE'
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = 'orange'
} else {
    msg.innerHTML = 'BOA NOITE'
    img.src = 'imagens/noite.jpg'
    document.body.style.background = 'black'
}

}