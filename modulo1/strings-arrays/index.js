/*
1.  a. undefined
    b. null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]]
    f. 9

2.  SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

//Exercicio 1

const nomeDoUsuario = prompt("Seu nome")
const emailDoUsuario = prompt("Seu email")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//Exercicio 2

const comidinhas = ["Lasanha", "Macarrão", "Pizza", "X-Burger", "Cenora"]

console.log(comidinhas)

console.log("Essas são as minhas comidas preferidas: ")
console.log(comidinhas[0])
console.log(comidinhas[1])
console.log(comidinhas[2])
console.log(comidinhas[3])
console.log(comidinhas[4])

const comidaDoUsuario = prompt("Sua comida favorita")
comidinhas[1] = comidaDoUsuario
console.log(comidinhas)

//Exercicio 3

const listaDeTarefas = []

listaDeTarefas.push(prompt("Tarefa 1"))
listaDeTarefas.push(prompt("Tarefa 2"))
listaDeTarefas.push(prompt("Tarefa 3"))

console.log(listaDeTarefas)

listaDeTarefas.splice(Number(prompt("Qual tarefa você terminou?")) - 1, 1)

console.log(listaDeTarefas)
