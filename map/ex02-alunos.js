const alunos = [
    { nome: "Marcos", nota: 7.5, presencas: 18 },
    { nome: "Julia", nota: 9.2, presencas: 20 },
    { nome: "Pedro", nota: 4.8, presencas: 12 },
    { nome: "Sofia", nota: 6.1, presencas: 15 }
]

//array só com as notas
const notas = alunos.map((n) => n.nota)
console.log(notas)

//array com as notas multiplicadas por 10
const notasMult = alunos.map((n) => n.nota * 10)
console.log(notasMult)

//array de strings formatadas
const arrayString = alunos.map((st) => `${st.nome}: ${st.nota}`)
console.log(arrayString)

//array situação
const situacao = alunos.map((sit) => sit.nota >= 6 ? "Aprovado" : "Reprovado")
console.log(situacao)

///array com a primeira letra do nome
const firstL = alunos.map((l) => l.nome[0])
console.log(firstL)

//array com presença de cada aluno (com 20 sendo o máximo de aulas)
const presenca = alunos.map((p) => (p.presencas / 20) * 100 + '%')
console.log(presenca)