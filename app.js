function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
  }

  function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Calculadora de Média e Situação do Aluno');
}

let nota1 = 6;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
let media = (nota1 + nota2 + nota3 + nota4) / 4;
let situacao = verificarAprovacao(media);

function calcularMedia(nota1, nota2, nota3, nota4) {
  return media;
}

alert(media);


function verificarAprovacao(media) {
  return media >= 5 ? "Aprovado" : "Reprovado";
}

 console.log("A média do aluno é " + media);
 console.log("A situação do aluno é " + situacao);