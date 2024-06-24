const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com a chegada da IA, como você imagina o futuro?",
        alternativas: [
            "Revolucionário!",
            "Um pouco preocupante!"
        ]
    },
    {
        enunciado: "Como você deve saber, existe meios de criar imagens IA, você acha que isso deve afetar no futuro?",
        alternativas: [
            "Não, é nada demais, são apenas imagens.",
            "Sim, consigo ver problemas futuro nisto.",
        ]
    },
    {
        enunciado: "A IA pode ajudar o mercado de trabalho?",
        alternativas: [
            "Pode! Isso poderá ajudar as empresas a fazer as coisas futuramente.",
            "Me preocupo com a perda de trabalho por conta deste meio."
        ]
    },
    {
        enunciado: "Como você vê os artistas, tendo em vista do crescimento e evolução da IA?",
        alternativas: [
            "Em meu ver, as artes irão ficar desvalorizadas por conta da evolução crescente da IA",
            "Em meu ver, isso não é de muita importância, não é algo grave."
        ]
    },
    {
        enunciado: "Suponhamos que você é um atista lá no futuro, e você vê pessoas usando IA para vender artes e ilustrações iguais ao que você realiza, o que você faz?",
        alternativas: [
           "Eu recorro à ações judiciais por págio contra a empresa que fundou a IA e à pessoa que à utiliza.",
            "Não irei ligar para isso e apenas ignorar, devo me acostumar ao mundo moderno."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
