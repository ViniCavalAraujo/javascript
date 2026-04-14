function senha() {
    const txtsenha = document.getElementById('txt')
    const senha = txtsenha.value

    if (senha.length < 8) {
        alert('Senha fraca')
    } else if (senha.length < 12) {
        alert('Senha média')
    } else {
        alert('Senha forte')
    }
}