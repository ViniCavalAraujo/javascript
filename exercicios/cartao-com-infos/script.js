function infos() {
    var cartaoExistente = document.getElementById('cont')
    if (cartaoExistente) {
        cartaoExistente.remove()
    }

    var txtnome = document.getElementById('nome')
    var nome = txtnome.value   
    
    var txtidade = document.getElementById('idade')
    var idade = txtidade.value


    if (nome == '' || idade == '') {
        alert('digite os campos!')
    } else {
        var div = document.createElement('div')
        div.setAttribute('id', 'cont')
        div.innerHTML = `${nome} tem ${idade} anos`

        document.body.appendChild(div)
        txtnome.value = ''
        txtidade.value = ''
    }

    
}