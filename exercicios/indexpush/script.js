
let objeto = ['chave']

function procurar() {
    let txt = document.getElementById('txt')
    let txtobj = txt.value
    let res = document.getElementById('res')


    if (txt.value == '') {
        alert('Preencha algo')
        return
    }

    if (objeto.indexOf(txtobj) != -1) {
        res.innerHTML = `Objeto <strong>${txtobj}</strong> já existente.`
    } else {
        let btExiste = document.getElementById('bt')
        if (btExiste) {
            btExiste.remove()
        }
        res.innerHTML = `Objeto <strong>${txtobj}</strong> não encontrado. Clique em Adicionar`
        let button = document.createElement('input')
        button.setAttribute('type', 'button')
        button.setAttribute('value', 'Adicionar')
        button.setAttribute('id', 'bt')
        
        document.body.appendChild(button)

        button.addEventListener('click', function() {
            if (adicionar() != objeto) {
            adicionar(txtobj)
            res.innerHTML = `Objeto <strong>${txtobj}</strong> adicionado.`
            txt.value = ''
            button.style.display = 'none'
            } 
        }
        )
        
       
    }
}

function adicionar(nome) {
    objeto.push(nome)
}

