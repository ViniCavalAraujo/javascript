let frutas = ['banana', 'abacaxi', 'uva']
console.log(frutas)
frutas[3] = 'maçã'
console.log(frutas)
frutas.push('kiwi')
console.log(frutas)

console.log(`Ordem decrescente ${frutas.sort((a,b) => b.localeCompare(a))}`)
console.log(`Primeiro elemento ${frutas[0]}`)