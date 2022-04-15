/*
1.  a) false
    b) false
    c) true
    d) boolean

2.  as variaveis são Strings, ou seja irão combinar assim 2 + 2 = 22

3.  Usando a função Number você pode tranformar as variaveis em numeros
*/

//  Exercicio 1

const suaIdade = Number(prompt("Sua idade"));
const bffIdade = Number(prompt("Idade do seu BFF"));

const isOlder = suaIdade > bffIdade;

console.log("Sua idade é maior do que a do seu melhor amigo?", isOlder);

console.log("Diferença de idade:", suaIdade - bffIdade);

//  Exercicio 2

const numero = prompt("Manda um numero par ai");

console.log(numero % 2);
//Quando é par retorna 0, quando é impar retorna 1

// Exercicio 3

const idade = Number(prompt("Sua idade"));

const idadeEmMeses = idade * 12;
const idadeEmDias = idade * 365.25;
const idadeEmHoras = idade * 8766;

console.log("Meses", idadeEmMeses);
console.log("Dias", idadeEmDias);
console.log("Horas", idadeEmHoras);

// Exercicio 4

const numeroUm = Number(prompt("Numero 1"));
const numeroDois = Number(prompt("Numero 2"));

console.log("O primeiro numero é maior que segundo?", numeroUm > numeroDois);
console.log("O primeiro numero é igual ao segundo?", numeroUm === numeroDois);
console.log(
  "O primeiro numero é divisível pelo segundo?",
  numeroUm % numeroDois === 0
);
console.log(
  "O segundo numero é divisível pelo primeiro?",
  numeroDois % numeroUm === 0
);

//DESAFIO

const exercicioA = (77 - 32) * (5 / 9) + 273.15;
console.log(exercicioA);

const exercicioB = 80 * (9 / 5) + 32;
console.log(exercicioB);

const promptCelsius = Number(prompt("Digite uma temperatura em C°"));
const exercicioCUm = 30 * (9 / 5) + 32;
const exercicioCDois = (30 * (9 / 5) + 32 - 32) * (5 / 9) + 273.15;
console.log(exercicioCUm, exercicioCDois);
