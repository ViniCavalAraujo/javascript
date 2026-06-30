let escolha = []
let inputesc = document.getElementById('pdd')
let res = document.getElementById('res')

function enviar() {

    let pedido = inputesc.value
    console.log(inputesc.value)

    if (pedido == '') {
        res.innerHTML = `Selecione uma opção!`
        return
    }

   if (escolha.length == 0) {
        alert('adicione um pedido antes')
   } else {
        alert('pedido realizado')
        reset()
   }
    
}

function adicionar() {
    let pedidoadd = inputesc.value

    if (pedidoadd == '') {
        res.innerHTML = 'Selecione uma opção'
        return
    }

    if (pedidoExiste(pedidoadd)) {
        res.innerHTML = `Pedido ${pedidoadd} já foi adicionado`
    } else {
        escolha.push(pedidoadd)
        res.innerHTML = `Pedido ${pedidoadd} adicionado.`
    }

}

function pedidoExiste(ped) {
    return escolha.indexOf(ped) != -1
}

function reset() {
    inputesc.value = ''
    res.innerHTML = ''
}