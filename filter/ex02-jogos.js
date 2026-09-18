const jogos = [
    {titulo: "Elden Ring", nota: 9.5, ano: 2022, genero: "RPG"},
    {titulo: "FIFA 23", nota: 6.8, ano: 2022, genero: "Esporte"},
    {titulo: "God of War", nota: 9.2, ano: 2018, genero: "Ação"},
    {titulo: "Minecraft", nota: 8.9, ano: 2011, genero: "Sandbox"},
    {titulo: "Cyberpunk 2077", nota: 7.1, ano: 2020, genero: "RPG"}
]

//array notas maior ou igual a 8.5
const arrayNotas = jogos.filter((notajogos) => notajogos.nota >= 8.5)
console.log(arrayNotas)


//array jogos lançados 2015 >
const arrayAno = jogos.filter((jogosano) => jogosano.ano > 2015)
console.log(arrayAno)

//array com generos RPG
const arrayRpg = jogos.filter((rpg) => rpg.genero === "RPG")
console.log(arrayRpg)

//array combinado
const arrayCombinado = jogos.filter((comb) => comb.nota > 7 && comb.ano > 2015)
console.log(arrayCombinado)

//array titulo
const arrayTitulo = jogos.filter((tt) => tt.titulo.length > 10)
console.log(arrayTitulo)