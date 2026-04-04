var button = document.getElementById('bt')
button.addEventListener('click', form)

function form() {
    var label = document.createElement('label')
    label.setAttribute('for', 'texto')
    label.innerHTML = 'Digite'

    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'texto')
    input.setAttribute('id', 'texto')

    var btconfirm = document.createElement('input')
    btconfirm.setAttribute('type', 'button')
    btconfirm.setAttribute('value', 'Confirmar')

    btconfirm.addEventListener('click', function(){
        var pExiste = document.getElementById('paragrafo')
        if (pExiste) {
            pExiste.remove()
        }

        if (input.value == '') {
        alert('Digite no campo!')
        } else {

        var texto = document.createElement('p')
        texto.setAttribute('id', 'paragrafo')
        texto.innerHTML = input.value
        document.body.appendChild(texto)
        input.value = ''
        }
    })

    document.body.appendChild(label)
    document.body.appendChild(input)
    document.body.appendChild(btconfirm)
}