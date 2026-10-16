# Calculadora de Média da Turma

Exercício em JavaScript que cadastra as notas de uma turma, calcula a média, conta os alunos aprovados e permite alterar as notas cadastradas.

## Funcionalidades

- Cadastro da quantidade de alunos e da nota de cada um (de 0 a 10)
- Cálculo da média da turma
- Contagem de alunos aprovados (nota maior ou igual a 7)
- Alteração de notas no vetor após o cadastro
- Validação das entradas: não aceita texto, valores fora do intervalo ou índices inexistentes
- Cancelar qualquer pergunta encerra o programa sem erros

## Tecnologias

- HTML5
- JavaScript (puro, sem bibliotecas)

## Conceitos praticados

- Arrays: `push`, `shift`, `pop`, `splice`, `reduce` e `filter`
- Funções comuns e arrow functions
- Constantes e escopo com `const` e `let`
- Validação de entrada com `prompt` e `alert`
- Manipulação do DOM com `getElementById`

## Como executar

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/calculadora-media-notas.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Clique em **Executar** e siga as instruções que aparecem na tela.

## Estrutura do projeto

```
calculadora-media-notas/
├── index.html   # Página com o botão e as áreas de resultado
├── script.js    # Lógica do programa
└── README.md
```

## Como funciona

1. O programa pergunta quantos alunos serão cadastrados e pede a nota de cada um.
2. Exibe as notas, a quantidade de alunos, a média da turma e o número de aprovados.
3. Pergunta se o usuário deseja alterar alguma nota. Se sim, executa estas etapas:
   - adiciona uma nova nota ao final do vetor;
   - remove a primeira e a última nota (`shift` e `pop`);
   - substitui a nota do índice escolhido (`splice`);
   - exibe o vetor atualizado, a nova média e a nova quantidade de alunos.

