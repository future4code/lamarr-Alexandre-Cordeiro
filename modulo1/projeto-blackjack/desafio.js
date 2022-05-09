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

console.log("Boas vindas ao jogo de Blackjack!")

let userWantToPlay = confirm("Quer iniciar uma nova rodada?")

while (userWantToPlay) {
  const cardsUser = []
  const cardsPc = []

  do {
    cardsUser.push(comprarCarta(), comprarCarta())
    cardsPc.push(comprarCarta(), comprarCarta())
  } while (
    (cardsUser[0].texto.slice(0, -1) === "A" && cardsUser[1].texto.slice(0, -1) === "A") ||
    (cardsPc[0].texto.slice(0, -1) === "A" && cardsPc[1].texto.slice(0, -1) === "A")
  )

  const sumPoints = (cards) => {
    let points = 0
    for (const card of cards) {
      points += card.valor
    }
    return points
  }

  const showCards = (rawCards) => {
    const cards = []
    for (const card of rawCards) {
      cards.push(card.texto)
    }
    return cards.join(", ")
  }

  let ptsUser = sumPoints(cardsUser)
  let ptsPc = sumPoints(cardsPc)

  let wantToDraw = true
  while (wantToDraw && ptsUser <= 21) {
    wantToDraw = confirm(
      `Suas cartas são ${showCards(cardsUser)}. A carta revelada do computador é ${cardsPc[0].texto}.` +
        "\n" + // \n faz pular a linha
        "Deseja comprar mais uma carta?"
    )

    if (wantToDraw) cardsUser.push(comprarCarta())

    ptsUser = sumPoints(cardsUser)
  }

  if (ptsUser <= 21) {
    while (ptsPc < ptsUser) {
      cardsPc.push(comprarCarta())
      ptsPc = sumPoints(cardsPc)
    }
  }

  console.log(`Usuário - cartas: ${showCards(cardsUser)} - pontuação ${ptsUser}`)
  console.log(`Computador - cartas: ${showCards(cardsPc)} - pontuação ${ptsPc}`)

  if (ptsUser > 21) {
    console.log("O computador ganhou!")
  } else if (ptsPc > 21) {
    console.log("O usuário ganhou!")
  } else if (ptsUser < ptsPc) {
    console.log("O computador ganhou!")
  } else if (ptsUser > ptsPc) {
    console.log("O usuário ganhou!")
  } else {
    console.log("Empate!")
  }

  if (!confirm("Quer iniciar uma nova rodada?")) userWantToPlay = false
}

console.log("O jogo acabou")
