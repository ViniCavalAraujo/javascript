function mudarCor() {
    var cortxt = document.getElementById('cor')
    var cor = cortxt.value.toLowerCase()


    if (cor == '') {
        alert('Digite uma cor!')
    }
    else {
        if (cor == 'vermelho') {
            document.body.style.background = 'red'
        } else if (cor == 'azul') {
            document.body.style.background = 'blue'
        } else if (cor ==  'verde') {
            document.body.style.background = 'green'
        } else {
            alert('cor inválida')
            
        }
        cortxt.value = '' //coloquei apenas algumas cores, pra colocar todas imagino que teria que ter alguma biblioteca ou algo do tipo
    }
}