function gerarMsg() {
    var txt = document.getElementById('txt')
    var nome = txt.value 
    var idd = document.getElementById('idd')
    var p = document.getElementById('res')

    if (nome === '' || idd.value === '' ) {
        alert('Preencha os campos')
    } else {
        var idade = Number(idd.value)
        if (idade <= 2) {
            p.innerHTML = `Bebê`
        } else if (idade < 12) {
            p.innerHTML = `Criança`
        } else if (idade < 18) {
            p.innerHTML = `Adolescente`
        } else if (idade <= 25) {
            p.innerHTML = `Jovem Adulto`
        } else if (idade < 60) {
            p.innerHTML = `Adulto`
        } else {
            p.innerHTML = `Idoso`
        }
    }
}