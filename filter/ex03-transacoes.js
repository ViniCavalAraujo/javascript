const transacoes = [
    {descricao: "Salário", valor: 4500, tipo: "entrada"},
    {descricao: "Aluguel", valor: -1200, tipo: "saida"},
    {descricao: "Freelance", valor: 800, tipo: "entrada"},
    {descricao: "Mercado", valor: -450, tipo: "saida"},
    {descricao: "Internet", valor: -100, tipo: "saida"}
]

//array com somente "entrada"
const arrayEntrada = transacoes.filter((ent) => ent.tipo === "entrada")
console.log(arrayEntrada)

//array com somente "saida"
const arraySaida = transacoes.filter((saida) => saida.tipo === "saida")
console.log(arraySaida)


const arrayAbsoluto = transacoes.filter((valorabs) => Math.abs(valorabs.valor) > 500)
console.log(arrayAbsoluto)

const semNegativo = transacoes.filter((t) => Math.abs(t.valor) > 500)
.map((t) => ({ ...t, valor: Math.abs(t.valor) }))  // depois: transforma o valor pra positivo
console.log(semNegativo)

//array com descrição
const arrayDescricao = transacoes.filter((desc) => desc.descricao.toLowerCase().includes('e'))
console.log(arrayDescricao)

//array combinado
const arrayCombinado = transacoes.filter((comb) => comb.tipo === "saida" && Math.abs(comb.valor) > 200)
    .map((t) => ({...t, valor: Math.abs(t.valor)}) )
console.log(arrayCombinado)