function contador() {
    var inicio = document.getElementById('inicio')
    var num_inicio = Number(inicio.value)

    var fim = document.getElementById('fim')
    var num_fim = Number(fim.value)

    var passo = document.getElementById('passo')
    var num_passo = Number(passo.value)

    var res = document.getElementById('res')

    if (inicio.value == '' || fim.value == '' || passo.value == '') {
        alert('Preencha todos')
        return
    }

    res.innerHTML = ''

    if (num_passo == 0) {
        alert('Impossível contar')
        return
    }

    for (var i = num_inicio; i < num_fim; i += num_passo) {
        res.innerHTML += `<br>${i}`

    }

    
}