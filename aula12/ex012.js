var hora_Atual = new Date()
var hora = hora_Atual.getHours()
var minutos = hora_Atual.getMinutes()

console.log(`Agora são ${hora}:${minutos}`)

if (hora < 12) {
    console.log('Bom dia')
}
else if (hora < 18) {
    console.log('Boa tarde')
}
else {
    console.log('Boa noite')
}