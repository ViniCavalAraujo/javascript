const btsomar = document.getElementById('sum')
btsomar.addEventListener('click', somar)

function somar() {
    let txt1 = document.getElementById('n1')
    let n1 = Number(txt1.value)

    let txt2 = document.getElementById('n2')
    let n2 = Number(txt2.value)

    let res = n1 + n2
    var p = document.createElement('p')
    p.innerHTML = `Soma de ${n1}+${n2} é ${res}`
    document.body.appendChild(p)
}


const btsub = document.getElementById('sub')
btsub.addEventListener('click', sub)

function sub() {
    let txt1 = document.getElementById('n1')
    let n1 = Number(txt1.value)

    let txt2 = document.getElementById('n2')
    let n2 = Number(txt2.value)

    let res = n1 - n2
    var p = document.createElement('p')
    p.innerHTML = `Subtração de ${n1}-${n2} é ${res}`
    document.body.appendChild(p)
}

const btmult = document.getElementById('mult')
btmult.addEventListener('click', mult)

function mult() {
    let txt1 = document.getElementById('n1')
    let n1 = Number(txt1.value)

    let txt2 = document.getElementById('n2')
    let n2 = Number(txt2.value)

    let res = n1 * n2
    var p = document.createElement('p')
    p.innerHTML = `Multiplicação de ${n1}*${n2} é ${res}`
    document.body.appendChild(p)
}


const btdiv = document.getElementById('div')
btdiv.addEventListener('click', div)

function div() {
    let txt1 = document.getElementById('n1')
    let n1 = Number(txt1.value)

    let txt2 = document.getElementById('n2')
    let n2 = Number(txt2.value)

    let res = n1 / n2
    var p = document.createElement('p')
    p.innerHTML = `Divisão de ${n1}/${n2} é ${res}`
    document.body.appendChild(p)
}