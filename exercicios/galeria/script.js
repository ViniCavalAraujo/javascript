function verAnimal() {
    var imgExistente = document.getElementById('foto')
    if (imgExistente != null) {
        imgExistente.remove() 
    }

    var img = document.createElement('img')
    img.setAttribute('id', 'foto') 
    img.style.cssText = 'width: 200px; border-radius: 50%;'

    var anm = document.getElementsByName('animal')

    
    if(anm[0].checked) {
        img.setAttribute('src', 'dog.jpg')
    } else if (anm[1].checked) {
        img.setAttribute('src', 'cat.jpg')
    } else {
        img.setAttribute('src', 'bird.jpg')
    }
    document.body.appendChild(img)
}