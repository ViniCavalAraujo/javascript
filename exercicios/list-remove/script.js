function itens() {
var txt = document.getElementById('txt')
var texto = txt.value
var list = document.getElementById('lista')   

var li = document.createElement('li')
li.innerHTML = texto
list.appendChild(li)
}

function removerItem() {
    var list = document.getElementById('lista')
    list.innerHTML = ''
}