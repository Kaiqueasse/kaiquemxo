console.log("Arquivo JS carregado!");

let pontuacao = 0;
let contadorCliques = 0;
const dicas = [
    "Não clique em links suspeitos.",
    "Use senhas fortes e diferentes para cada serviço.",
    "Sempre atualize seu antivírus.",
    "Evite baixar arquivos de fontes desconhecidas."
];

function calcularRisco() {
    pontuacao = 0;
    const resp1 = document.getElementById("pergunta1").value;
    const resp2 = document.getElementById("pergunta2").value;

    console.log("Respostas:", resp1, resp2);

    if (resp1 === "Sim") pontuacao += 1;
    if (resp2 === "Sim") pontuacao += 1;

    console.log("Pontuação calculada:", pontuacao);

    let resultado = "";
    if (pontuacao === 0) resultado = "Baixo risco";
    else if (pontuacao === 1) resultado = "Médio risco";
    else resultado = "Alto risco";

    console.log("Resultado final:", resultado);

    document.getElementById("resultadoQuiz").innerHTML = resultado;
}

function resetarQuiz() {
    pontuacao = 0;
    document.getElementById("pergunta1").value = "";
    document.getElementById("pergunta2").value = "";
    document.getElementById("resultadoQuiz").innerHTML = "";

    console.log("Quiz resetado. Pontuação:", pontuacao);
}

function verificarMitoVerdade(idFrase, respostaUsuario) {
    let frase = document.getElementById(idFrase);
    const corretas = {
        "frase1": "Mito",
        "frase2": "Verdade",
        "frase3": "Mito"
    };

    console.log("Usuário respondeu:", respostaUsuario, " | Correta:", corretas[idFrase]);

    if (respostaUsuario === corretas[idFrase]) frase.innerHTML = "Correto! Você acertou!";
    else frase.innerHTML = "Errado! Tente novamente.";
}

function limparResposta(idFrase) {
    document.getElementById(idFrase).innerHTML = "";
    console.log("Resposta limpa para:", idFrase);
}

function contarClique() {
    contadorCliques += 1;
    const el = document.getElementById("contador");
    if(el) el.innerHTML = "Você clicou " + contadorCliques + " vezes!";
    console.log("Contador de cliques:", contadorCliques);
}

function mostrarDica() {
    const indice = Math.floor(Math.random() * dicas.length);
    const el = document.getElementById("dica");
    if(el) el.innerHTML = dicas[indice];
    console.log("Dica mostrada:", dicas[indice]);
}

function trocarTema() {
    const body = document.body;
    const novoBg = body.style.backgroundColor === "black" ? "#f9f9f9" : "black";
    const novoCor = body.style.color === "white" ? "black" : "white";
    body.style.backgroundColor = novoBg;
    body.style.color = novoCor;
    console.log("Tema alterado:", novoBg, novoCor);
}

function mostrarMensagem(msg) {
    const el = document.getElementById("mensagem");
    if(el) el.innerHTML = msg;
    console.log("Mensagem exibida:", msg);
}
function toggleIntegrantes() {
    const div = document.getElementById("integrantes");
    div.style.display = div.style.display === "block" ? "none" : "block";
}
