const NOTA_MINIMA_APROVACAO = 7;

// Pede um número ao usuário e repete até ser válido. Retorna null se cancelar.
function lerNumero(mensagem, min, max, inteiro = false) {
    while (true) {
        const entrada = prompt(mensagem);
        if (entrada === null) return null;

        const valor = Number(entrada);
        const valido = entrada.trim() !== ""
            && !isNaN(valor)
            && valor >= min
            && valor <= max
            && (!inteiro || Number.isInteger(valor));

        if (valido) return valor;
        alert(`Valor inválido. Digite um número entre ${min} e ${max}.`);
    }
}

const calcularMedia = (notas) =>
    notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

const contarAprovados = (notas) =>
    notas.filter((nota) => nota >= NOTA_MINIMA_APROVACAO).length;

function resolver() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("alteracao").innerHTML = "";

    const qtd = lerNumero("Digite a quantidade de alunos que serão cadastrados:", 1, 100, true);
    if (qtd === null) return;

    const notas = [];
    for (let i = 1; i <= qtd; i++) {
        const nota = lerNumero(`Digite a nota do aluno ${i} (0 a 10):`, 0, 10);
        if (nota === null) return;
        notas.push(nota);
    }

    document.getElementById("resultado").innerHTML =
        "Notas cadastradas: " + notas + "<br>" +
        "Quantidade de alunos: " + notas.length + "<br>" +
        "Média da turma: " + calcularMedia(notas).toFixed(2) + "<br>" +
        "Alunos aprovados: " + contarAprovados(notas);

    const mudanca = prompt("Deseja alterar alguma nota? [S/N]");
    if (mudanca === null || mudanca.trim().toLowerCase() !== "s") return;

    // Etapas do exercício: adicionar uma nota, remover a primeira e a última
    const novaNota = lerNumero("Digite uma nova nota (0 a 10):", 0, 10);
    if (novaNota === null) return;
    notas.push(novaNota);
    notas.shift();
    notas.pop();

    if (notas.length === 0) {
        alert("Não há mais notas para alterar.");
        return;
    }

    const indice = lerNumero(
        `Qual índice deseja alterar? (0 a ${notas.length - 1})`,
        0, notas.length - 1, true
    );
    if (indice === null) return;

    const notaAlterada = lerNumero("Qual será a nova nota (0 a 10)?", 0, 10);
    if (notaAlterada === null) return;
    notas.splice(indice, 1, notaAlterada);

    document.getElementById("alteracao").innerHTML =
        "Vetor após as alterações: " + notas + "<br>" +
        "Nova média: " + calcularMedia(notas).toFixed(2) + "<br>" +
        "Nova quantidade de alunos: " + notas.length;
}