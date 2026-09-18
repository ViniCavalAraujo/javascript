const funcionarios = [
    {nome: "Marcos", salario: 3200, cargo: "Analista"},
    {nome: "Julia", salario: 5800, cargo: "Gerente"},
    {nome: "Pedro", salario: 2900, cargo: "Assistente"},
    {nome: "Sofia", salario: 7100, cargo: "Diretora"}
]

//array com funcionarios q ganham 3000 >
const salario = funcionarios.filter((sal) => sal.salario > 3000)
console.log(salario)

//array gerente
const arrayGerente = funcionarios.filter((ger) => ger.cargo === "Gerente")
console.log(arrayGerente)

//array != gerente
const difGerente = funcionarios.filter((dif) => dif.cargo !== "Assistente")
console.log(difGerente)

//array nomes começam com a letra S ou M
const arrayNome = funcionarios.filter((funcnome) => funcnome.nome[0] === "S" || funcnome.nome[0] === "M" )
console.log(arrayNome)

//array entre 3000 e 6000
const arrayValor = funcionarios.filter((valor) => valor.salario >= 3000 && valor.salario <= 6000)
console.log(arrayValor)