// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const newArray = []
  array.map(item => {
    newArray.unshift(item)
  })
  return newArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const quickSort = (arr) => {
    if(arr.length <= 1) return arr
    const pivo = arr[0]
    const esquerda = []
    const direita = []

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < pivo) {
            esquerda.push(arr[i])
        }
        else {
            direita.push(arr[i])
        }
    }

    return [...quickSort(esquerda), pivo, ...quickSort(direita)]
  }
  return quickSort(array)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = []
    for (const item of array) {
        if(item % 2 === 0) pares.push(item)
    }
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = []
    for (const item of array) {
        if(item % 2 === 0) pares.push(item * item) 
    }
    return pares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    array.map(item => {
        if(item > maior) maior = item
    })
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
    if(num1 > num2) {
        maior = num1
        menor = num2
    }
    else {
        maior = num2
        menor = num1
    }

    const divisivel = maior % menor === 0

    const diferenca = maior - menor
    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor : divisivel,
        diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const pares = []
    for (let i = 0; i < n*2; i+=2) {
        pares.push(i)
    }
    return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}