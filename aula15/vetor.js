let vet = [5,10,15]

let pos = vet.indexOf(15)
console.log(`o valor ${vet[2]} está na posição ${pos}`)


let numeros = [10, 7, 5, 3, 9, 8, 1, 4, 2, 6]
numeros[10] = 11 //valor 11 adicionado na posição 10
numeros.sort((a,b) => b - a) //comparação numérica
console.log(numeros)


let profiss = ['barbeiro', 'médico', 'motorista']
profiss.push('atleta') //adiciona
profiss.sort((a,b) => a.localeCompare(b)) //comparação ordem crescente
console.log(`${profiss} tem ${profiss.length} elementos`)