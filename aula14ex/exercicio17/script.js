function tabuada() {
    var num = document.getElementById('num')
    var numtabuada = Number(num.value)
    var res = document.getElementById('res')

    res.innerHTML = ''

    if (num.value == '') {
        alert('Insira um número')
        return
    }

    if (numtabuada == 0) {
        alert('Zero não é multiplicável')
        return
    }

    if (numtabuada < 0) {
        alert('Número inválido')
        return
    }
    for (var i = 1; i <= 10; i++) {
       res.innerHTML += `${numtabuada}x${i}= ${numtabuada * i}<br>`
       
    }
    
}