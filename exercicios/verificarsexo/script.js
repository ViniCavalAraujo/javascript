    var bt = document.getElementById('but')
    bt.addEventListener('click', validarSexo)


    function validarSexo() {
    var sexo = document.getElementsByName('radiosexo')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

   
    
    if (sexo[0].checked) {
        alert('masculino')
        img.setAttribute('src', 'wlpp.jpg')
        document.body.appendChild(img)
        img.style.width = '200px'
        
    } else if (sexo[1].checked) {
        alert('feminino')
        document.body.style.background = 'red'
    } else {
        alert('selecione uma opção!')
    }


}