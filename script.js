// Declaração dos botões que são números
const keyNumbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
let newNumber = true; // Variável para controlar se é um novo número

// Função que recebe o evento 'click' como parâmetro e atualiza a tela com o número ou operador clicado
const updateDisplay = (event) => {
    if (newNumber) {
        display.value = event.target.textContent; // Se for um novo número, substitui o conteúdo atual
        newNumber = false; // Define newNumber como false para indicar que já não é um novo número
    } else {
        display.value += event.target.textContent; // Se não for um novo número, anexa o texto do botão ao conteúdo atual
    }
};

// Evento de click para as teclas numéricas e operadores
keyNumbers.forEach(number => {
    number.addEventListener('click', updateDisplay);
});

const keyOperators = document.querySelectorAll(".operations");
keyOperators.forEach(operator => {
    operator.addEventListener('click', updateDisplay);
});