/*
1)  Ele está adicionando cada vez mais em um looping o valor. Imprime 10
2)  a) 19, 21, 23, 25, 27, 30
    b) Sim,
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let [index,numero] of lista.entries()) {
    if (numero > 18) {
            console.log(index)
        }
    }
3)  *
    **
    ***
    ****
*/

// Exercicio 1

const qtsPets = Number(prompt("Quantos pets você tem?"))
const pets = []

if (qtsPets <= 0) {
    console.log("Que pena! Você pode adotar um pet!")
}
for (let i = 0; i < qtsPets; i++) {
    pets.push(prompt(`Qual é o nome do ${i+1}° pet?`))
}

for (const pet of pets) {
    console.log(pet)
    
}

// Exercicio 2

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

console.log('Resposta A')

for (const numero of array) {
    console.log(numero)
}

console.log('Resposta B')

for (const numero of array) {
    console.log(numero/10)
}

console.log('Resposta C')

const newArray = []

for (const numero of array) {
    if (numero % 2 === 0) {
        newArray.push(numero)
    }
}

for (const numero of newArray) {
    console.log(numero)
}

console.log('Resposta D')

const stringArray = []

for (let i = 0; i < array.length; i++) {
    stringArray.push(`O elemento do índex ${i} é: ${array[i]}`)
}

for (const numero of stringArray) {
    console.log(numero)
}

console.log('Resposta E')

let maior = array[0]
let menor = array[0]

for (const numero of array) {
    if (numero > maior) {
        mario = numero
    }
    if (numero < menor) {
        menor = numero
    }
}

console.log(`O maior número é ${mario} e o menor é ${menor}`)