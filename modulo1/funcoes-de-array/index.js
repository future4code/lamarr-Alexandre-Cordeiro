/*
1)  { nome: "Amanda Rangel", apelido: "Mandi" }, 0 , [array]
    { nome: "Laís Petra", apelido: "Laura" }, 1 , [array]
    { nome: "Letícia Chijo", apelido: "Chijo" }, 2 , [array]

2)  ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3)  [{ nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" }]
*/

// Exercicio 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const petsA = pets.map(item => {
    return item.nome
})

const petsB = pets.filter(item => {
    return item.raca === 'Salsicha'
}) 

const petsC = pets.map(item => {
    if(item.raca === 'Poodle') return {...item, mensagem: `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`}
    return item
})

// Exercicio 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const produtosA = produtos.map(item => item.nome)

const produtosB = produtos.map(item => {
    return {nome: item.nome, preco: (item.preco/100)*95}
})

const produtosC = produtos.filter(item => item.categoria === "Bebidas")

const produtosD = produtos.filter(item => item.nome.includes("Ypê"))

const produtosE = produtosD.map(item => `Compre ${item.nome} por ${item.preco}`)
