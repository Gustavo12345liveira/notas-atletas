let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10,10,7.88,8.42,9.34]
  },
  {
    nome: "Fernando Puntel",
    notas:  [10,10,7,8,9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [10,7,8,9.5,9.5]
  },
  {
    nome: "Bruno Castro",
    notas: [10,10,10,9,9.5]
  } 
];

function ImprimirInformacoesAtletas(matriz) {
  for (let i = 0; i < matriz.length; i++) {
      media = obterMedia(matriz[i]['notas'])
      console.log(" ");
      console.log(`Atleta: ${matriz[i]['nome']}`) 
      console.log(`Notas Obtidas: ${matriz[i]['notas']}`)
      console.log(`Média Válida: ${media}`)
  }
}

function obterMedia(listaNotas) {
  somaTotalArray = 0
  for (let i = 0; i < listaNotas.length; i++){
    somaTotalArray += listaNotas[i]
  }

  totalMenosUltimo = somaTotalArray - listaNotas[listaNotas.length - 1];
  totalParaCalculo = totalMenosUltimo - listaNotas[0]

  comprimentoArrayParaCalculo = listaNotas.length - 2
  return totalParaCalculo / comprimentoArrayParaCalculo;
}

ImprimirInformacoesAtletas(atletas)