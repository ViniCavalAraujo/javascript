function clique() {
    var label = document.createElement('label')
    label.setAttribute('for', 'nome')
    label.innerHTML = 'digite'

    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'nome')
    input.setAttribute('id', 'nome')

    var bt = document.createElement('input')
    bt.setAttribute('type', 'button')
    bt.setAttribute('value', 'confirmar')


    bt.addEventListener('click', function() {
        var texto = input.value
        if (texto == '') {
            alert('digite algo!')
        } else {
        alert('você digitou: ' + texto)
        input.value = ''
        }
    })

    document.body.appendChild(label)
    document.body.appendChild(input)
    document.body.appendChild(bt)
}