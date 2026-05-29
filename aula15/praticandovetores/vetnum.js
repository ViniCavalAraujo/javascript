let num = [5, 6, 16, 10, 20, 8, 40, 4, 1, 3, 25, 44, 99]
let soma_total = 0
let media = 0
let maior = num[0]
let menor = num[0]
let total_par = 0
let total_impar = 0

for (var i = 0; i < num.length; i++) {
    if (num[i] > maior) {
        maior = num[i]
    }

    if (num[i] < menor) {
        menor = num[i]
    }

    if (num[i] % 2 == 0) {
        console.log(`${num[i]} é par`)
        total_par++
    } else {
        console.log(`${num[i]} é ímpar`)
        total_impar++
    }
    soma_total += num[i]
}

media = soma_total / num.length

console.log(`Soma total: ${soma_total}`)
console.log('Média:', media.toFixed(2))
console.log(`Maior número: ${maior}`)
console.log(`Menor número: ${menor}`)
console.log(`Total de números pares: ${total_par}`)
console.log(`Total de números ímpares: ${total_impar}`)
console.log(`Total de elementos: ${num.length}`)