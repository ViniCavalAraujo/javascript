const contas = [
    {nome: "Conta de Luz", valor: -230, categoria: "moradia"},
    {nome: "Assinatura Netflix", valor: -45, categoria: "lazer"},
    {nome: "Venda de item usado", valor: 150, categoria: "extra"},
    {nome: "Conta de Água", valor: -90, categoria: "moradia"},
    {nome: "Presente recebido", valor: 200, categoria: "extra"}
]

//array com contas cujo valor absoluto > 100
const contasAbs = contas.filter((conta) => 
    Math.abs(conta.valor) > 100).map((conta) => ({...conta, valor: Math.abs(conta.valor)}))
console.log(contasAbs)

//array nomes contenham ''conta''
const nomeConta = contas.filter((includeConta) => includeConta.nome.toLowerCase().includes('conta'))
console.log(nomeConta)

//array encadeado
const arrayCombinado = contas.filter((comb) => 
    comb.categoria === "moradia").map((comb) => ({...comb, valor: Math.abs(comb.valor)}))
console.log(arrayCombinado)

//array encadeado positivos
const arrayPositivos = contas.filter((pos) => pos.valor > 0).map((pos) => `${pos.nome} ${pos.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(arrayPositivos)
