let num = [5,1,8,3,2]

console.log(`Está assim ${num}`)
console.log(`Ordenado em ordem crescente ${num.sort((a,b) => a -b)}`)
console.log(`Ordenado em ordem decrescente ${num.sort((a,b) => b-a)}`)
console.log(num)

//aqui já inclui o exercício 9, 10 e 11 concorda?


let a = [10, 5, 8]
let b = [...a]
b.push(30)
console.log(a,b)