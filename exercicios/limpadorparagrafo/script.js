function contador() {
    var txt = document.getElementById('txt')
    var texto = txt.value


    if (texto == '') {
        alert('digite algo')
    } else {
        var p = document.createElement('p')
        p.innerHTML = `texto digitado: ${texto}`
        document.body.appendChild(p)
        txt.value = ''
    }

}