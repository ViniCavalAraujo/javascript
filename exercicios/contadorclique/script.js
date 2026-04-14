var cont = 0

function contador() {
    var res = document.getElementById('res')

    cont++
    res.innerHTML = `Clique n°${cont}`
    document.body.appendChild(res)
}