function temperatura() {
    var radiotemp = document.getElementsByName('temp')
    var txtnum = document.getElementById('num')
    var num = Number(txtnum.value)
    var res = document.getElementById('res')

    var faren = num * 1.8 + 32
    var celcius = (num - 32) / 1.8
    if (radiotemp[0].checked) {
        res.innerHTML = `${faren.toFixed(2)}°F`
        document.body.appendChild(res)
    } else {
        res.innerHTML = `${celcius.toFixed(2)}°C`
        document.body.appendChild(res)
    }
}