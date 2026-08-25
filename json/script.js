//aprendendo JSON
const cadastro = [
    {nome: "Vinícius", idade: 23, profissao: "estudante", hobbies: ["programar", "futebol", "música"]},
    {nome: "Alber", idade: 28, profissao: "engenheiro", hobbies: ["video game", "filmes/séries"]},
    {nome: "Gilberto", idade: 26, profissao: "gerente", hobbies: ["viajar", "filmes/séries"]},
    {nome: "Luiza", idade: 22, profissao: "estagiária", hobbies: ["estudar", "filmes/séries", "música", "viajar"]},
]

console.log(cadastro)

//adição de objeto
cadastro.push({nome: "Raquel", idade: 27, profissao: "advogada", hobbies: ["leitura", "filmes/séries", "academia"]})
console.log(cadastro)


//conversão de objeto para string
const jsonData = JSON.stringify(cadastro)
console.log(jsonData)


//conversão de string para objeto
const objData = JSON.parse(jsonData)
console.log(objData)