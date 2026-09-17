const pedidos = [
    {cliente: "Ana", itens: ["pizza", "refrigerante"], total: 45.90},
    {cliente: "Bruno", itens: ["hambúrguer"], total: 22.50},
    {cliente: "Carla", itens: ["salada", "suco", "sobremesa"], total: 38.00}
]

//array qtde de itens por pedido
const qtdePedido = pedidos.map((qtde) => qtde.itens.length)
console.log(qtdePedido)

//array de strings
const arrayStrings = pedidos.map((st) => st.itens.length > 1 ? `${st.cliente} pediu ${st.itens.length} itens` : `${st.cliente} pediu ${st.itens.length} item`)
console.log(arrayStrings)