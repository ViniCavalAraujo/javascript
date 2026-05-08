function esportesFavoritos() {
    var option = document.querySelectorAll('input[name="esportes"]')
    var otheroption = document.getElementById('outro')
    var othertext = document.getElementById('outrotext')
    var text = othertext.value
    

    var selecionado = false


    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            selecionado = true
        }
    }

    if (!selecionado && !otheroption.checked && othertext.value == '') {
        alert('Preencha algo')
    } else {

        if (otheroption.checked && othertext.value == '') {
            alert('Preencha o texto')
            otheroption.checked = false
        } else if (othertext.value !== '' && otheroption.checked) {
            alert(`Enviado, você digitou ${text}`)
            otheroption.checked = false
            othertext.value = ''
        } else {
            if (othertext.value !== '' && !otheroption.checked) {
                alert('marque a opção outro')
                othertext.value = ''
            } else {
            alert('Enviado')
            otheroption.checked = false
            othertext.value = ''
            }
        }
        for (var i = 0; i < option.length; i++) {
            option[i].checked = false
        }

    }

}