function validar() {
    var txtname = window.document.getElementById('nome')
    var name = txtname.value

    var txtidade = window.document.querySelector('input#idade')
    var idade = txtidade.value

    if (name.length == 0 || idade.length == 0 ) {
        alert('preencha os campos')
    } else {
        var idadeNum = Number(idade)
        var infos = document.createElement('div')
        infos.setAttribute('id', 'info')
        infos.style.cssText = 'display: flex; flex-direction: column; background: black; width: 200px; color: white; padding: 20px; text-align: center;'
        infos.innerHTML = `<p>Nome:${name}</p> <p>Idade:${idade}</p>`
        document.body.appendChild(infos)
    }
    

}