/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
console.log("Boas vindas ao jogo de Blackjack!")

let userWantToPlay = confirm("Quer iniciar uma nova rodada?")

while (userWantToPlay) {
  const cardsUser = [comprarCarta(), comprarCarta()]
  const cardsPc = [comprarCarta(), comprarCarta()]

  const ptsUser = cardsUser[0].valor + cardsUser[1].valor
  const ptsPc = cardsPc[0].valor + cardsPc[1].valor

  console.log(`Usuário - cartas: ${cardsUser[0].texto} ${cardsUser[1].texto}  - pontuação ${ptsUser}`)
  console.log(`Computador - cartas: ${cardsPc[0].texto} ${cardsPc[1].texto} - pontuação ${ptsPc}`)

  if (ptsUser < ptsPc) {
    console.log("O computador ganhou!")
  } else if (ptsUser > ptsPc) {
    console.log("O usuário ganhou!")
  } else {
    console.log("Empate!")
  }

  if (!confirm("Quer iniciar uma nova rodada?")) userWantToPlay = false
}

console.log("O jogo acabou")
console.log("Boas vindas ao jogo de Blackjack!")

let userWantToPlay = confirm("Quer iniciar uma nova rodada?")

while (userWantToPlay) {
  const cardsUser = [comprarCarta(), comprarCarta()]
  const cardsPc = [comprarCarta(), comprarCarta()]

  const ptsUser = cardsUser[0].valor + cardsUser[1].valor
  const ptsPc = cardsPc[0].valor + cardsPc[1].valor

  console.log(`Usuário - cartas: ${cardsUser[0].texto} ${cardsUser[1].texto}  - pontuação ${ptsUser}`)
  console.log(`Computador - cartas: ${cardsPc[0].texto} ${cardsPc[1].texto} - pontuação ${ptsPc}`)

  if (ptsUser < ptsPc) {
    console.log("O computador ganhou!")
  } else if (ptsUser > ptsPc) {
    console.log("O usuário ganhou!")
  } else {
    console.log("Empate!")
  }

  if (!confirm("Quer iniciar uma nova rodada?")) userWantToPlay = false
}

console.log("O jogo acabou")
console.log("Boas vindas ao jogo de Blackjack!")

let userWantToPlay = confirm("Quer iniciar uma nova rodada?")

while (userWantToPlay) {
  const cardsUser = [comprarCarta(), comprarCarta()]
  const cardsPc = [comprarCarta(), comprarCarta()]

  const ptsUser = cardsUser[0].valor + cardsUser[1].valor
  const ptsPc = cardsPc[0].valor + cardsPc[1].valor

  console.log(`Usuário - cartas: ${cardsUser[0].texto} ${cardsUser[1].texto}  - pontuação ${ptsUser}`)
  console.log(`Computador - cartas: ${cardsPc[0].texto} ${cardsPc[1].texto} - pontuação ${ptsPc}`)

  if (ptsUser < ptsPc) {
    console.log("O computador ganhou!")
  } else if (ptsUser > ptsPc) {
    console.log("O usuário ganhou!")
  } else {
    console.log("Empate!")
  }

  if (!confirm("Quer iniciar uma nova rodada?")) userWantToPlay = false
}

console.log("O jogo acabou")
*/
