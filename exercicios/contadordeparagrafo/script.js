var contador = 0

function contadorParagrafo() {
    var p10Existe = document.getElementById('par')
    var pfinalExiste = document.getElementById('pfinal')    
    var txtinput = document.getElementById('txt')
    var texto = txtinput.value
    var div = document.getElementsByClassName('cont')[0]
    var p = document.createElement('p')
    p.setAttribute('id', 'par')
    var pfinal = document.createElement('p')
    pfinal.setAttribute('id', 'pfinal')
    if (texto == '') {
        alert('Digite algo!')
    } else {
        if (p10Existe) {
            p10Existe.remove()
        }
        if (pfinalExiste) {
            pfinalExiste.remove()
        }
        contador ++
        p.style.cssText = 'color: white; background-color: black; width: 200px; text-align: center; padding: 10px;'
        p.innerHTML = ` Você digitou <strong><mark style="background-color: white; color: red;">${texto}</mark></strong><br> parágrafo nº${contador}`
        div.appendChild(p)
        txtinput.value = ''
        if (contador == 10) {
            p.style.cssText = 'display: none;'
            pfinal.style.cssText = 'color: white; background-color: black; width: 200px; text-align: center;'
            pfinal.innerHTML = 'Viu só xD'
            div.appendChild(pfinal)
            contador = 0
        }
    }
}