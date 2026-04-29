function contar() {
    const n = Number(document.getElementById('numero').value)
    let i = 1
    let texto = ''

    while (i <= n) {
        texto += i + ' '
        i++
    }

    document.getElementById('resultado').textContent = texto
}