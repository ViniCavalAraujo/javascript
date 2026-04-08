function produto() {
    var divExiste = document.getElementById('div')
    var txt = document.getElementById('txtnome')
    var nome = txt.value
    var txtpreco = document.getElementById('txtpreco')
    
    var button = document.getElementById('bt')


    if (nome == '' || txtpreco.value == '') {
        alert('Preencha os campos!')
    } else {
        if (divExiste) {
            divExiste.remove()
        }

        var preco = Number(txtpreco.value)
        var div = document.createElement('div')
        div.setAttribute('id', 'div')
        div.innerHTML = `Nome ${nome} e preço ${preco}`
        div.classList.add('menu')
        document.body.appendChild(div)

        txt.value = ''
        txtpreco.value = ''
    }

  

    
}