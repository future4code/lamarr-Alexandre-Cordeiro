/* 
1.  10
    10 e 5

2.  10, 10, 10

3.  Calcula quanto você ganha por hora, 
    let horasPorDia
    let reaisPorDia
*/

//Exercicio 1

let nome;
let idade;

alert(typeof idade)

//Está undefined pois não atribuimos nenhum valor

nome = prompt("Seu nome")
idade = prompt("Sua idade")


alert(typeof nome)
alert(typeof idade)

// As suas são string para que a idade seja um Number, precisamos transforma-la em Number

alert("Olá " +nome+ ", você tem "+ idade+ " anos")

//Exercicio 2

const gostaDeVerdePergunta = "Você gosta de verde?"
const gostaDeVerde = prompt(gostaDeVerdePergunta)

const gostoPorArtesPergunta = "Qual seu tipo de arte favorita?"
const gostoPorArtes = prompt(gostoPorArtesPergunta)

const gostoPorComidaPergunta = "Qual sua comida favorita?"
const gostoPorComida = prompt(gostoPorComidaPergunta)


alert(gostaDeVerdePergunta + " - " + gostaDeVerde)
alert(gostoPorArtesPergunta + " - " + gostoPorArtes)
alert(gostoPorComidaPergunta + " - " + gostoPorComida)

//Exercicio 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c = b
b = a
a = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO

const numeroUm = prompt("Primeiro numero")
const numeroDois = prompt("Segundo numero")

const x = numeroUm + numeroDois
const y = numeroUm * numeroDois