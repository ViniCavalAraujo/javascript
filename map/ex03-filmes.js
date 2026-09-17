const filmes = [
    { titulo: "Matrix", ano: 1999, avaliacao: 8.7 },
    { titulo: "Duna", ano: 2021, avaliacao: 8.0 },
    { titulo: "Coringa", ano: 2019, avaliacao: 8.4 },
    { titulo: "Vingadores", ano: 2012, avaliacao: 8.1 }
]

//array idade do filme
const data = new Date()
const ano = data.getFullYear()
const idade = filmes.map((idd) => ano - idd.ano)
console.log(idade)

//array de strings
const arrayString = filmes.map((st) => `${st.titulo} (${st.ano}) - ${st.avaliacao}`)
console.log(arrayString)

//array título maiúsculos
const arrayMaiusculo = filmes.map((m) => m.titulo.toUpperCase())
console.log(arrayMaiusculo)


//array de objetos mantendo somente título e avaliação
const arrayObj = filmes.map((obj) => ({titulo: obj.titulo, avaliacao: obj.avaliacao}))
console.log(arrayObj)

//array condicional
const classico = filmes.map((cl) => cl.ano < 2015 ? "Clássico" : "Recente")
console.log(classico)
