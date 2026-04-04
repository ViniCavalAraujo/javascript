function adicionar() {

    var input = document.getElementById('txt')
    var texto = input.value


    if (texto == '') {
        alert('Digite algo!')
    } else {
        var ul = document.getElementById('lista')
        var item = document.createElement('li')
        item.innerHTML = `item <strong><mark>${texto}</mark></strong> adicionado`
        ul.appendChild(item)
        input.value = ''
    }

    
}