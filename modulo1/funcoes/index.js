/*
1.  a) 10, 50
    b) Retorna multiplos de 5

2.  a) A função transforma o texto dos parametros em minusculo e verifica se tem cenoura no texto
    b)  i. true
        ii. true
        iii. true


*/

// Exercicio 1

const imprimeInfo = (nome, idade, cidade, profissao) => {
  console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

// Exercicio 2

const soma = (n1, n2) => {
  return n1 + n2
}
const compara = (n1, n2) => {
  return n1 > n2
}
const isEven = (n) => {
  return n % 2 === 0
}
const tamString = (string) => {
  return string.length
}

console.log(soma(2, 5))
console.log(compara(2, 5))
console.log(isEven(2))
const nString = "Olá eu sou uma string"
console.log(tamString(nString), nString.toUpperCase())

// Exercicio 3

const somar = (n1, n2) => {
  return n1 + n2
}
const subtrair = (n1, n2) => {
  return n1 - n2
}
const multiplicar = (n1, n2) => {
  return n1 * n2
}
const dividir = (n1, n2) => {
  return n1 / n2
}

const numero1 = Number(prompt("Insira um numero"))
const numero2 = Number(prompt("Insira um numero"))

console.log(`Números inseridos: ${numero1} e ${numero2}`)
console.log(`Soma: ${somar(numero1, numero2)}`)
console.log(`Diferença: ${subtrair(numero1, numero2)}`)
console.log(`Multiplicação: ${multiplicar(numero1, numero2)}`)
console.log(`Divisão: ${dividir(numero1, numero2)}`)
