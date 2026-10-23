const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um artefato antigo e poderoso é encontrado nas fronteiras do seu reino. Ele pertenceu ao antigo Lorde das Trevas. Qual é o seu primeiro comando?",
        alternativas: [
            {
                texto: "Levar o artefato para a torre dos magos para que ele seja estudado e usado na defesa do reino.",
                afirmacao: "Você escolheu o caminho do conhecimento, preferindo estudar as forças ocultas para usá-las a seu favor."
            },
            {
                texto: "Organizar uma comitiva de guerreiros para levar o artefato até uma montanha vulcânica e destruí-lo imediatamente.",
                afirmacao: "Você escolheu o caminho da prudência e do sacrifício, sabendo que certos poderes são perigosos demais para existir."
            }           
        ]
    },
    {
        enunciado: "O reino vizinho, habitado por Elfos da Floresta, está sendo atacado por criaturas sombrias. Eles pedem a sua ajuda, mas seu exército está reduzido. O que você faz?",
        alternativas: [
            {
                texto: "Marchar imediatamente para a floresta. Uma aliança de sangue não pode ser quebrada.",
                afirmacao: "Sua lealdade aos aliados se provou inabalável, marchando para o perigo em nome da honra."
            },
            {
                texto: "Manter suas tropas nas muralhas protegendo seu próprio povo. A prioridade é a sobrevivência dos seus.",
                afirmacao: "Você agiu como um líder estrategista e focado na sobrevivência, priorizando a segurança interna do seu povo."
            }
        ]
    },
    {
        enunciado: "Uma jovem órfã surge no castelo demonstrando habilidades mágicas descontroladas que assustam os moradores. Como você lida com a situação?",
        alternativas: [
            {
                texto: "Acolher a jovem no castelo e providenciar um mentor para que ela aprenda a dominar sua magia.",
                afirmacao: "Demonstrou grande empatia e visão de futuro, acolhendo novos talentos e transformando medo em potencial."
            },
            {
                texto: "Exilá-la do reino para garantir que nenhum acidente mágico fira os cidadãos.",
                afirmacao: "Sua liderança foi rígida e severa, escolhendo afastar ameaças imprevisíveis sem hesitar."
            }
        ]
    },
    {
        enunciado: "Durante uma batalha decisiva contra um dragão ancestral, você tem a oportunidade de desferir o golpe final, mas isso destruirá um templo histórico antigo. E agora?",
        alternativas: [
            {
                texto: "Sacrificar o templo. Paredes de pedra podem ser reconstruídas, vidas ceifadas pelo dragão não.",
                afirmacao: "Ficou claro que você valoriza as vidas presentes acima da história e dos monumentos do passado."
            },
            {
                texto: "Encontrar outra estratégia de combate, mesmo que mais arriscada, para preservar o templo sagrado.",
                afirmacao: "Você mostrou um respeito quase religioso pelas tradições, arriscando a própria vida para salvar o legado do reino."
            }
        ]
    },
    {
        enunciado: "A guerra acabou. Diante do trono, você deve decidir como o reino será governado de agora em diante. Qual será seu legado?",
        alternativas: [
            {
                texto: "Criar um conselho formado por representantes de todas as raças (humanos, elfos e anões) para governarem juntos.",
                afirmacao: "No fim, você unificou o mundo de fantasia criando uma era de paz, diplomacia e igualdade entre os povos."
            },
            {
                texto: "Assumir a coroa como o único soberano absoluto, garantindo que suas leis rígidas mantenham a ordem.",
                afirmacao: "No fim, você se tornou um imperador imponente e solitário, cujo punho de ferro garantiu uma ordem inquebrável por séculos."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "As Crônicas do Reino ditam que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
