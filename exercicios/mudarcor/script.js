function mudarCor() {
    var cor = document.getElementsByName('radiocor')

    if (cor[0].checked) {
        document.body.style.background = 'red'
    } else if (cor[1].checked) {
        document.body.style.background = 'blue'
    } else {
        document.body.style.background = 'green'
    }
}