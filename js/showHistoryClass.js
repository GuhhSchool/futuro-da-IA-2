import { createHistoryClass } from "./createHistoryClass.js";
import { getUsername } from './script.js';

const mainBoxElement = document.querySelector('.div--main');
const mainBoxAnimElement = document.querySelector('.div--anim-background');
const buttonBoxElement = document.querySelector('.div--buttons');
const textHistoryElement = document.querySelector('.p--text');
const titleHistoryElement = document.querySelector('.h1--title');
const restartButtonElement = document.querySelector('.img--restart');
let currentHistory = 'Biografia de: <span class="color-yellow">G{nome}</span><br>Ano: <span class="color-yellow">2049</span><br>';

/** Classe para a organização e demonstração de histórias */
export class showHistoryClass {
    // Variáveis locais
    #idHistory;
    #currHistoryObj;

    /** 
     * Classe para a organização e demonstração de histórias
     * @param {number} id - O identificador da história 
     * */
    constructor(id) {
        // Configurando variáveis
        this.#idHistory = id;

        // Buscando e iniciando história
        this.#currHistoryObj = this.getHistory(id);
  
    }

    /** 
     * Função para buscar os dados de histórias 
     * @param {number} id - Identificador da história
     * */
    getHistory(id) {
        return new createHistoryClass().getHistoryById(id);
    }

    setHistory() {
        this.#setTitle();
        this.#setButtons();
        adjustHeight();
    }

    getName() {
        return getUsername();
    }

    // Função privada para criar o texto da história
    #setTitle() {
        textHistoryElement.innerHTML = this.#currHistoryObj.history.replaceAll('G{nome}', this.getName());

        // Animações
        textHistoryElement.animate({ color: '#0B0D20'}, { duration: 0, fill: 'forwards' });
        
        // Timeout para nova animação
        setTimeout(() => {
            textHistoryElement.animate({ color: '#D7F9FF'}, { duration: 250, fill: 'forwards' });
            textHistoryElement.style.color = '#D7F9FF';
            textHistoryElement.style.opacity = 1;

            // Ajustando título da IA
            if (this.#idHistory === 8) titleHistoryElement.innerHTML = 'Você decide o futuro da <span class="color-yellow">Inteligência Artificial</span>';
        }, 500);
    }

    /* Função para criar os botões */
    #setButtons() {
        // Animações
        buttonBoxElement.animate({ opacity: 0, display: 'none' }, { duration: 0, fill: 'forwards' });
        
        // Timeout para nova animação
        setTimeout(() => {
            buttonBoxElement.animate({ opacity: 1, display: 'flex' }, { duration: 500, fill: 'forwards' });
            adjustHeight();
        }, 2000);

        setTimeout(() => adjustHeight(), 2050);

        for (const alternative of this.#currHistoryObj.buttons) {
            // Criando elemento e conteúdo
            
            const alternativeButton = document.createElement('button');
            alternativeButton.textContent = alternative.question;
            
            // Registrando click e adicionando na div
            alternativeButton.onclick = () => this.#onclick(alternative);
            buttonBoxElement.appendChild(alternativeButton); 
        }
    }

    /** 
     * Função para receber os clicks dos botões 
     * @param {buttonParams} clickInfo - As informações do botão clicado
     * */
    #onclick(clickInfo) {
        // Ajustando dados do botão e da história
        buttonBoxElement.textContent = "";
        if (clickInfo.reply) currentHistory += `<br>${clickInfo.reply}<br>`;

        // Criando nova história
        if (clickInfo.to) new showHistoryClass(clickInfo.to).setHistory();
        else this.#showResult();
    }

    /** Função para mostrar resultado final das decisões */
    #showResult() {
        // Trocando "G{name}" pelo nome do usuário
        textHistoryElement.innerHTML = currentHistory.replaceAll('G{nome}', this.getName());

        // Ajustando design dos conteúdos
        buttonBoxElement.textContent = "";
        restartButtonElement.style.display = "flex";
        document.documentElement.style.setProperty('--color-border', '#ffef08');
        adjustHeight();
    }
}

function adjustHeight() {
    mainBoxAnimElement.style.height = mainBoxElement.clientHeight + 'px';
}

/** 
 * @typedef {object} buttonParams - Parâmetros para a criação dos botões
 * @property {String} question - O texto do botão
 * @property {String} reply - A resposta que o usuário terá ao clicar no botão
 * @property {Number} to - Redireciona para o id ao clicar neste botão
*/