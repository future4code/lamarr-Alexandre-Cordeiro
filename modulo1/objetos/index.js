/*
1)  Matheus Nachtergaele
    Virginia Cavendish
    {canal: "Globo", horario: "14h"}
    
2)  {
        nome: "Juca", 
        idade: 3, 
        raca: "SRD"
    }
    {
        nome: "Juba", 
        idade: 3, 
        raca: "SRD"
    }
    {
        nome: "Jubo", 
        idade: 3, 
        raca: "SRD"
    }
    
    A sintaxe ... espalha o conteudo dentro do objeto

3)  false
    undefined

    A função retorna acessa um objeto usando colchetes 

*/

//Exercicio 1

const pessoa = {
    nome: "Alexandre", 
    apelidos: ["Alex", "Xande", "AREK"]
}

const imprimePessoa = (pessoa) => {
    const nome = pessoa.nome
    const apelidos = pessoa.apelidos
    console.log(`Eu sou ${nome}, mas pode me chamar de: ${[...apelidos]}`)
}

imprimePessoa(pessoa)

const pessoa2 = {...pessoa, apelidos:["Pantera", "Herdeiro"]}

imprimePessoa(pessoa2)

//Exercicio 2

const personagem = {
    nome: "Ramon",
    idade: "24",
    profissao: "Joalheiro",
}
const personagem2 = {
    nome: "Bruno",
    idade: "42",
    profissao: "Motorista",
}

const minhaFuncao = (obj) => {
    const nome = obj.nome
    const tamanhoNome = obj.nome.length
    const idade = obj.idade
    const profissao = obj.profissao
    const tamanhoPro = obj.profissao.length
    return [nome, tamanhoNome, idade, profissao, tamanhoPro]
}

console.log(minhaFuncao(personagem))
console.log(minhaFuncao(personagem2))

//Exercicio 3

const carrinho = []

const fruta1 = {
    nome: "Kiwi",
    disponibilidade: true
}

const fruta2 = {
    nome: "Abacaxi",
    disponibilidade: true
}

const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
}

const colocaNoCarrinho = (fruta) => {
    carrinho.push(fruta)
}

colocaNoCarrinho(fruta1)
colocaNoCarrinho(fruta2)
colocaNoCarrinho(fruta3)

console.log(carrinho)