
function criadorParagrafo() {
    var input = document.getElementById('txt')
    var texto = input.value

    var p = document.createElement('p')
    p.innerHTML = texto
    document.body.appendChild(p)
    
    

}