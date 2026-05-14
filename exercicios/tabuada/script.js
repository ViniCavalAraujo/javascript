function tabuada() {
    var num = document.getElementById('num')
    var num_tabuada = Number(num.value)
    var numlimite = document.getElementById('numlimite')
    var num_multiplicador = Number(numlimite.value)
    var res = document.getElementById('res')

    res.innerHTML = ''

    if (num.value == '' || numlimite.value == '') {
        alert('Preencha todos os campos')
        return
    }

    if (num_tabuada <= 0 || num_multiplicador <= 0) {
        alert('O número deve ser maior ou igual a 1')
        return
    }
    
    for (var i = 1; i <= num_multiplicador; i++) {
        res.innerHTML += `${num_tabuada}x${i}=${num_tabuada * i}<br>`
    }
}


function limpardados() {
    var num = document.getElementById('num') 
    var numlimite = document.getElementById('numlimite')
    var res = document.getElementById('res')

    num.value = ''
    numlimite.value = ''
    res.innerHTML = ''
}