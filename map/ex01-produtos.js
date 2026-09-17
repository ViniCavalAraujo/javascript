const produtos = [
    {nome: "Caneta", preco: 2.5},
    {nome: "Caderno", preco: 15},
    {nome: "Mochila", preco: 89.9}
]

//array nome produto
const nomeProduto = produtos.map((nm) => nm.nome)
console.log(nomeProduto)

//array preços em desconto
const desconto = produtos.map((d) => (d.preco * 0.90).toFixed(2))
console.log(desconto)

//array de strings formatadas
const stringForm = produtos.map((st) => `${st.nome} - R$ ${st.preco.toFixed(2)}`)
console.log(stringForm)
