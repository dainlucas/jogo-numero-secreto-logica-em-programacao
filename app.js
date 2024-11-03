let listaDeNumerosSorteados = [];
let numeroLimite = 4;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function verificarChute () {
    let chute = document.querySelector('input').value;

    if (chute ==  numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoTela('h1', 'Acertou');
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto) {
        exibirTextoTela('p', 'O número secreto é menor');
    }
    else {
        exibirTextoTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
}
function gerarNumeroAleatorio(quantidadeNumeros) {
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
} 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoTela('h1', 'Boas vindas ao Desafio');
    exibirTextoTela('p', 'Escolha um número de 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
function exibirMensagemInicial() {
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');
}