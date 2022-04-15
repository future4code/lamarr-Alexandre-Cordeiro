// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!")

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Manda a altura"))
  const largura = Number(prompt("Manda a largura"))

  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Ano atual"))
  const anoNasc = Number(prompt("Ano de nascimento"))

  console.log(anoAtual - anoNasc)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Seu nome")
  const idade = prompt("Sua idade")
  const email = prompt("Seu Email")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Sua cor 1")
  const cor2 = prompt("Sua cor 2")
  const cor3 = prompt("Sua cor 3")

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const tempArr = array.slice(1, -1)
  return [array[array.length - 1], ...tempArr, array[0]]
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Ano atual"))
  const anoNasc = Number(prompt("Ano nascimento"))
  const anoCarteira = Number(prompt("Ano da emissão da sua carteira"))

  const idade = anoAtual - anoNasc
  const tempCarteira = anoAtual - anoCarteira

  const velhoRenova = idade > 50 && tempCarteira >= 15
  const novoRenova = idade <= 20 && tempCarteira >= 5
  const adultoRenova = idade > 20 && idade <= 50 && tempCarteira >= 10

  console.log(velhoRenova || novoRenova || adultoRenova)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const mult4 = ano % 4 === 0
  const mult100 = ano % 100 === 0 && ano % 400 !== 0

  return !mult100 && mult4
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const adulto = prompt("Você tem mais de 18 anos?")
  const ensino = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(adulto === "sim" && ensino === "sim" && disponibilidade === "sim")
}
