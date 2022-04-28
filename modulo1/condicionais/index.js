/*
1)  a) Ele pegar um nomero do usuário e retorna Passou no teste caso seja par
    b) Par
    c) Impar

2)  a) Serve para determinar o preço da fruta
    b) O preço da fruta, Maça é "R$ 2.25
    c)  O preço da fruta, Pêra é "R$ 5

3)  a) Perguntando um nomero e transformando a string em number
    b) Com 10 = Essa mensagem é secreta!!!
       Com -10 = 
    c) Vai dar erro de qua a mensagem não foi definida pois a variavel só é definida quando o numero for maior que 0
*/

// Exercicio 1

const idade = Number(prompt("Qual é a sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}

// Exercicio 2

const turno = prompt("Qual turno você estuda? M = Matutino, V = Vespertino, N = Noturno").toUpperCase()

if(turno === "M") console.log("Bom dia!")
else if(turno === "V") console.log("Boa tarde!")
else if(turno === "N") console.log("Boa noite!")
else console.log("Entrada invalida!")

// Exercicio 3

switch (turno) {
    case "M":
        console.log("Bom dia!")
        break;

    case "V":
        console.log("Boa tarde!")
        break;

    case "N":
        console.log("Boa noite!")
        break;

    default:
        console.log("Entrada invalida!")
        break;
}

// Exercicio 4

const genero = prompt("Qual é o gênero do filme?")
const preco = Number(prompt("Quanto custa esse filme?"))

if(genero === "fantasia" && preco < 15) console.log("Bom filme!")
else console.log("Escolha outro filme :(")