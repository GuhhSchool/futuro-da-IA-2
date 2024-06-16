/** @type {historyParams[]} */
const historiesGlobalArray = [];

/** Classe para criar e organizar as histórias */
export class createHistoryClass {
    #historyParams;

    /** 
     * Classe para criar e organizar as histórias 
     * @param {historyParams} historyParams - Parâmetros para a criação de uma parte da história
    */
    constructor(historyParams) {
        if (typeof historyParams === 'undefined') return;

        // Ajustando variáveis
        this.#historyParams = historyParams;
        
        // Iniciando funções
        this.#verifyParamErrors();
        this.#addHistory();
    }

    /** 
     * Função para buscar a array de uma história 
     * @param {number} id - O identificador da história
     * */
    getHistoryById(id) {
        return historiesGlobalArray.find(f => f.id === id);
    }

    /** Função para buscar a array das histórias */
    getAllHistories() {
        return historiesGlobalArray;
    }


    /** Função para criar a história */
    #addHistory() {
        historiesGlobalArray.push(this.#historyParams);
    }

    /** Função para verificar erros nas sintaxes */
    #verifyParamErrors() {
        if (typeof this.#historyParams !== 'object') console.error(`Dados da história a ser criada não foi enviada corretamente. \n"Objeto" enviado: ${this.#historyParams}`);
        if (historiesGlobalArray.find(f => f.id === this.#historyParams.id)) console.error(`Conflito no id enviado da história. \nErro no envio da história: ${this.#historyParams.history}`)
        if (typeof this.#historyParams.history !== 'string') console.error(`A história está vazia. Erro no envio da história: ${this.#historyParams.history}`)
        if (!Array.isArray(this.#historyParams.buttons)) console.error(`Parte da história enviada precisa ter as alternativas no formato "Array". "Array" enviada: ${this.#historyParams.buttons}`);
        if (this.#historyParams.buttons.some(s => typeof s.question !== 'string')) console.error(`O parâmetro de botões de uma história precisa ter o campo "question" como uma String. Erro no envio da história: ${this.#historyParams.history}`)
        if (typeof this.#historyParams.id !== 'number') console.error(`História criada sem id definido! Sem o id, não será possível localizar esta parte da história.\nParte da história: ${this.#historyParams?.id}`);
    }
        
}

/** 
 * @typedef {object} historyParams - Parâmetros para a criação de uma parte da história
 * @property {Number} id - O identificador da história
 * @property {String} history - O texto da história
 * @property {buttonsParams} buttons - Parâmetros para a criação dos botões
*/

/** 
 * @typedef {object[]} buttonsParams - Parâmetros para a criação dos botões
 * @property {String} question - O texto do botão
 * @property {String} reply - A resposta que o usuário terá ao clicar no botão
 * @property {Number} to - Redireciona para o id ao clicar neste botão
*/