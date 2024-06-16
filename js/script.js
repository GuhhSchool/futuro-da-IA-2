import { showHistoryClass } from './showHistoryClass.js';

// Buscando elementos
const mainBoxElement = document.querySelector('.div--main');
const mainBoxAnimElement = document.querySelector('.div--anim-background');
const textHistoryElement = document.querySelector('.p--text');
const resultBoxElement = document.querySelector('.div--result');
const resultTextElement = document.querySelector('.p--result-text');
const divInputElement = document.querySelector('.div--input');
const inputElement = document.querySelector('.input--name');
const startButtonElement = document.querySelector('.img--send');

// Variáveis usadas no projeto
let username = '';

// ? START
// Função principal para começar a história 
start();
function start() {
    textHistoryElement.innerHTML = 'Olá! <br><br>Antes de começarmos nosso jogo, qual nome de usuário você gostaria de usar?';
    adjustHeight();
}

// Enviando click do "enter" do teclado para enviar o nome de usuário
inputElement.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') verifyName();
});

// Verificando nome enviado
startButtonElement.addEventListener('click', verifyName);
function verifyName() {
    // Ajustando respostas de erros
    const temporaryName = inputElement.value;
    const letters = /^[A-Za-z çÇáÁíÍãÃóÓéÉêÊâÂúÚüÜ]+$/;
    username = 'S/n';
    
    if (temporaryName.length) {
        if (temporaryName.length <= 2) return alert('Ops! Seu nome precisa ter pelo menos 3 caracteres.');
        if (!temporaryName.match(letters)) return alert('Ops! Seu nome não pode conter caracteres especiais (exceto espaços)');
        username = temporaryName.trim().split(/ +/g).map(m => m.replace(m[0], m[0].toUpperCase())).join(' ');
    }
    
    // // Iniciando história
    divInputElement.style.display = 'none';
    new showHistoryClass(0).setHistory();
    // preview();
}

export function getUsername() {
    return username;
}

// * funções extras
// Função para ajustar a altura da caixa da história
function adjustHeight() {
    mainBoxAnimElement.style.height = mainBoxElement.clientHeight + 'px';
}

// Função para iniciar a história
// function preview() {
//     // Ajustando animações
//     divInputElement.style.opacity = 0;
//     textHistoryElement.style.opacity = 0;
//     const { border, textAlign } = textHistoryElement.style; 

//     setTimeout(() => {
//         divInputElement.style.display = 'none';
//         textHistoryElement.style.cssText = 'border: none; text-align: center';
//         textHistoryElement.textContent = 'Vamos começar...';

//         adjustHeight();
//         textHistoryElement.style.opacity = 1;
//     }, 1000);

//     setTimeout(() => textHistoryElement.style.opacity = 0, 2000);
    
//     setTimeout(() => {
//         textHistoryElement.style.cssText = `border: ${border}, text-align: ${textAlign}`;
        
//         // Criando a primeira parte da história
//         new showHistory(currentIndex);
//     }, 3000);
// } 