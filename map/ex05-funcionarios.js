const funcionarios = [
    {nome: "Marcos", salario: 3200, cargo: "Analista"},
    {nome: "Julia", salario: 5800, cargo: "Gerente"},
    {nome: "Pedro", salario: 2900, cargo: "Assistente"},
    {nome: "Sofia", salario: 7100, cargo: "Diretora"}
]

//array com salário anual de cada um
const salarioAnual = funcionarios.map((funcsal) => 
    `${funcsal.nome} salário anual: ${(funcsal.salario * 12).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(salarioAnual)

//array de objetos, utilizando spread mantendo os campos e add um campo novo (bônus)
console.log('ARRAY COM CAMPO NOVO')
const arrayObj = funcionarios.map((obj) => 
    ({...obj, bonus: ((obj.salario * 10) / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}))
console.log(arrayObj)

//array de strings
console.log('ARRAY FORMATADO')
const arrayStrings = funcionarios.map((st) => 
    `${st.nome} (${st.cargo}): ${st.salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(arrayStrings)

//array condicional
console.log('ARRAY CONDICIONAL')
const arraycond = funcionarios.map((cond) => 
    cond.cargo === "Gerente" || cond.cargo === "Diretora" ? "Liderança" : "Operacional")
console.log(arraycond)

//array em minúsculo
console.log('ARRAY EM MINÚSCULO')
const arrayMinusculo = funcionarios.map((minu) => minu.cargo.toLowerCase())
console.log(arrayMinusculo)
