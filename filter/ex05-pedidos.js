const pedidosLoja = [
    {produto: "Fone Bluetooth", valor: 89, categoria: "eletronico"},
    {produto: "Camiseta Básica", valor: -25, categoria: "roupa"},
    {produto: "Mouse Gamer", valor: 150, categoria: "eletronico"},
    {produto: "Devolução Tênis", valor: -180, categoria: "roupa"},
    {produto: "Carregador Portátil", valor: 60, categoria: "eletronico"}
]

//array pedidos absolutos valor > 70
console.log('array pedidos absolutos valor > 70')
const pedidosAbs = pedidosLoja.filter((ped_abs) => 
    Math.abs(ped_abs.valor) > 70).map((ped_abs) => ({...ped_abs, valor: Math.abs(ped_abs.valor)}))
console.log(pedidosAbs)

//array itens só com palavra ''gamer''
console.log('array itens só com palavra gamer')
const arrayBusca = pedidosLoja.filter((busca) => busca.produto.toLowerCase().includes('gamer'))
console.log(arrayBusca)

//array encadeado eletronicos
console.log('array encadeado eletronicos')
const arrayEncadeado = pedidosLoja.filter((enc) => 
    enc.categoria.toLowerCase().includes('eletronico')).map((enc) => `${enc.produto}: ${enc.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(arrayEncadeado)

//array encadeado negativos
const arrayNegativos = pedidosLoja.filter((negativo) => negativo.valor < 0)
    .map((negativo) => ({...negativo, valor: Math.abs(negativo.valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}))
console.log(arrayNegativos)

