import { createHistoryClass } from './createHistoryClass.js';

// Configurando Histórias
new createHistoryClass({
    history: `Ótimo! Seu nome será <span class='color-yellow'>G{nome}</span>.`,
    id: 0,

    buttons: [
        {
            question: 'Começar',
            to: 1,
        }
    ]
})

new createHistoryClass({
    history: 'Ao chegar em casa, você se depara com uma pessoa que diz ser capaz de resolver todas as suas dúvidas de matemática. Qual a sua reação?',
    id: 1,
    
    buttons: [
        {
            question: 'Hmm... achei interessante.',
            reply: 'Desde o começo, G{nome} se interessou pela parceria com a IA.',
            to: 2,
        },

        {
            question: 'Tenho certeza que é golpe.',
            reply: 'No começo, G{nome} achou que era golpe e ficou com medo de conversar com a IA.',
            to: 2,
        }
    ]
});

new createHistoryClass({
    history: 'No dia seguinte, no colégio, você decide contar para a sua turma sobre o que viu no dia anterior.',
    id: 2,

    buttons: [
        {
            question: 'Continuar >>',
            to: 3,
        }
    ]
})

new createHistoryClass({
    history: 'Então, a professora de matemática resolve passar novas atividades de casa para a turma resolver, com brinde para quem acertar tudo. O que você faz?',
    id: 3,

    buttons: [
        {
            question: 'Converso com essa pessoa misteriosa para que explique e me ajude a resolver as lições.',
            reply: 'Um tempo depois, quis arriscar e ver o que ela tinha a oferecer, já que precisava de ajuda em suas atividades escolares.',
            to: 4,
        },
        {
            question: 'Resolvo a lição com base em conversas com colegas, pesquisas na internet e conhecimentos próprios sobre o tema.',
            reply: 'Um tempo depois, optou por não usar as novidades dela pois acreditava que se sairia bem na atividades escolares que tinha, usando apenas as próprias fontes de conhecimento.',
            to: 6,
        },
    ],
})

new createHistoryClass({
    history: "No dia seguinte, ao entregar as lições, seu amigo estudioso errou apenas uma questão. Se aproximando de você, a professora diz que você acertou todas!",
    id: 4,

    buttons: [
        {
            question: 'Continuar >>',
            to: 5,
        }
    ]
});

new createHistoryClass({
    history: 'Então, ela decide fazer perguntas sobre as lições, das quais você consegue responder facilmente! O que você pensa?',
    id: 5,

    buttons: [
        {
            question: 'Defendo a ideia de que a ajuda dessa pessoa misteriosa pode criar novas oportunidades e até melhorar habilidades humanas.',
            reply: 'Com a ajuda da IA, G{nome} conseguiu se destacar e tirou a maior nota da turma! Então concluiu que usar IA para adquirir conhecimento e ter ajuda será uma das formas de melhorar o mundo.',
            to: 8,
        },
        {
            question: 'Me preocupo com as pessoas que perderão seus méritos mesmo tendo se esforçado (como o meu colega).',
            reply: 'Com a ajuda da IA, G{nome} conseguiu se destacar e tirou a maior nota da turma! Porém, em um gesto de solidariedade pelos colegas que não tiraram a mesma nota, viu que a ferramenta pode prejudicar pessoas e acabar com trabalhos que considera dignos para humanos.',
            to: 8,
        },
    ]
});


new createHistoryClass({
    history: 'Você traz o trabalho no dia seguinte e acerta 90% das questões. Porém, tem um colega que acertou 100% delas usando a ajuda dessa pessoa misteriosa.',
    id: 6,

    buttons: [
        {
            question: 'Continuar >>',
            to: 7,
        }
    ],
});

new createHistoryClass({
    history: 'Seu colega, mesmo sem ter estudado com você, parece ter aprendido bastante se igualando ao seu nível de aprendizado. O que você pensa?',
    id: 7,

    buttons: [
        {
            question: 'Defendo a ideia de que a ajuda dessa pessoa misteriosa pode criar novas oportunidades e até melhorar habilidades humanas.',
            reply: 'Por conta dessa decisão, G{nome} não conseguiu a melhor nota da turma apesar do grande esforço... Então percebeu que a IA ajudaria em situações como essa, onde daria mais oportunidades e ajuda para que as pessoas possam adquirir mais habilidades humanas.',
            to: 8,
        },
        {
            question: 'Me preocupo com as pessoas que perderão seus méritos por conta de pessoas como a "misteriosa".',
            reply: 'Por conta dessa decisão, G{nome} não conseguiu a melhor nota da turma apesar do grande esforço, tirando a conclusão de que inteligências artificiais apenas prejudicariam pessoas que se esforçam e trabalham duro.',
            to: 8,
        },
    ],
});

new createHistoryClass({
    history: "Ao chegar em casa, você pergunta o nome dessa pessoa misteriosa e ela diz se chamar “Inteligência Artificial”.",
    id: 8,

    buttons: [
        {
            question: 'Continuar >>',
            to: 9,
        },
    ]
});

new createHistoryClass({
    history: "Logo de cara você se assusta, mas percebe que a IA faz contas de matemática corretamente e explicadas para você. Então você decide:",
    id: 9,

    buttons: [
        {
            question: 'Começar a usar mais essa ferramenta para auxiliar quando você precisar.',
            reply: 'Um tempo passou e, quando G{nome} descobriu do que a IA realmente é capaz, se surpreendeu tanto que resolveu começar a usá-la frequentemente até os dias atuais, onde ela ajuda diariamente em tarefas cotidianas e profissionais.',
        },
        {
            question: 'Expulsar a IA de casa. Pois pode ser muito perigosa se começarem a usar ela com más intenções.',
            reply: 'Um tempo passou e, quando G{nome} descobriu do que a IA realmente é capaz, se assustou tanto que nunca mais quis vê-la em sua frente, preferindo ler livros e adquirir conhecimentos através de estudos.',
        },
    ]
});