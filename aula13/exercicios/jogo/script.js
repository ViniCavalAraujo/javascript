function jogo() {
    var numCerto = 10
    var n = Number(prompt('Digite um número:'))

    while (n !== numCerto) {
        n = Number(prompt('Errou, tente novamente:'))
    }

    alert('Acertou')
}