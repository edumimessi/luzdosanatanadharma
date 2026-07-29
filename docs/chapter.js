const chapters = [
  {
    title: "Arjuna Viṣāda Yoga",
    subtitle: "Capítulo 1 · O yoga da aflição de Arjuna",
    sanskrit: "अर्जुनविषादयोग",
    summary: "Arjuna pede que Krishna coloque a carruagem entre os dois exércitos. Ao reconhecer parentes, mestres e amigos entre os combatentes, ele é dominado pela aflição, questiona a guerra e abandona o arco.",
    context: "A crise mostra o conflito entre dever, afeto, justiça e consequência. Arjuna já não consegue agir apenas com base no papel de guerreiro; ele precisa compreender o que torna uma ação verdadeiramente correta.",
    themes: ["crise espiritual", "dharma", "compaixão", "paralisia", "discernimento"],
    verse: "Ao contemplar seus parentes reunidos para a batalha, Arjuna sente o corpo enfraquecer, a mente confundir-se e perde a capacidade de sustentar o arco.",
    reference: "Bhagavad Gītā 1.28–30 · síntese temática",
    reflection: "Há momentos em que antigas certezas deixam de orientar nossas escolhas. A aflição pode revelar que uma decisão é mais complexa do que parecia. O caminho começa quando deixamos de esconder a confusão e buscamos orientação com sinceridade.",
    practice: "Nomeie uma decisão diante da qual você se sente paralisado. Separe em três linhas: o que temo, quem será afetado e qual princípio preciso preservar.",
    questions: ["O que minha aflição está tentando mostrar?", "Que responsabilidade não pode ser ignorada?", "De quem posso receber orientação sem entregar minha consciência?"]
  },
  {
    title: "Sāṃkhya Yoga",
    subtitle: "Capítulo 2 · O yoga do conhecimento",
    sanskrit: "सांख्ययोग",
    summary: "Krishna inicia sua resposta distinguindo o permanente do transitório. O capítulo reúne ensinamentos sobre Ātman, equanimidade, ação sem apego e a pessoa de sabedoria estável.",
    context: "Arjuna deseja abandonar a ação para evitar sofrimento, mas Krishna mostra que a clareza não nasce apenas da retirada. É necessário compreender a natureza do ser e agir com discernimento.",
    themes: ["Ātman", "equanimidade", "sabedoria", "ação sem apego", "estabilidade"],
    verse: "A responsabilidade está na ação, não no controle absoluto de seus frutos; o apego ao resultado não deve justificar nem ansiedade nem inércia.",
    reference: "Bhagavad Gītā 2.47 · síntese temática",
    reflection: "Quando fazemos do resultado a única medida do valor da ação, oscilamos entre ansiedade, orgulho e desistência. A equanimidade permite agir com cuidado sem transformar o futuro em posse.",
    practice: "Escolha uma tarefa importante e defina dois critérios: o que significa realizá-la com integridade e quais resultados não dependem somente de você.",
    questions: ["O que permanece quando as circunstâncias mudam?", "Que resultado tem governado excessivamente minha paz?", "Como agir com excelência sem me apropriar de tudo?"]
  },
  {
    title: "Karma Yoga",
    subtitle: "Capítulo 3 · O yoga da ação",
    sanskrit: "कर्मयोग",
    summary: "Krishna explica que ninguém permanece verdadeiramente sem agir. A ação pode aprisionar quando movida por apego egoísta, ou tornar-se disciplina espiritual quando oferecida ao dharma e ao bem comum.",
    context: "Arjuna pergunta por que deveria agir se o conhecimento é elevado. A resposta mostra que ação e contemplação não precisam ser opostas e que a ação correta pode purificar a intenção.",
    themes: ["ação", "serviço", "dever", "oferenda", "svadharma"],
    verse: "Realize a ação que deve ser feita sem apego; ao agir dessa maneira, a pessoa se encaminha para o mais elevado.",
    reference: "Bhagavad Gītā 3.19 · síntese temática",
    reflection: "Karma Yoga pergunta como o trabalho cotidiano muda quando é realizado com presença, responsabilidade e disposição de servir, em vez de apenas por competição ou reconhecimento.",
    practice: "Realize hoje uma tarefa necessária sem anunciar, reclamar ou buscar elogio. Ao concluir, observe a qualidade de sua intenção.",
    questions: ["A quem minha ação serve?", "Onde o desejo de reconhecimento enfraquece meu dever?", "Qual é meu svadharma nesta situação concreta?"]
  },
  {
    title: "Jñāna Karma Sannyāsa Yoga",
    subtitle: "Capítulo 4 · Conhecimento, ação e renúncia",
    sanskrit: "ज्ञानकर्मसंन्यासयोग",
    summary: "Krishna fala da transmissão antiga do yoga, de sua manifestação quando o dharma declina, das muitas formas de oferenda e do conhecimento capaz de iluminar a ação.",
    context: "O capítulo amplia a compreensão de renúncia: não se trata apenas de abandonar atividades, mas de reconhecer a natureza da ação, da inação e da intenção que as sustenta.",
    themes: ["conhecimento", "avatāra", "dharma", "oferenda", "renúncia"],
    verse: "Quando o dharma declina e o adharma se fortalece, o divino se manifesta para proteger, transformar e restabelecer a ordem.",
    reference: "Bhagavad Gītā 4.7–8 · síntese temática",
    reflection: "A restauração do dharma também acontece quando alguém interrompe um padrão de mentira, violência ou negligência e escolhe agir segundo um princípio mais elevado.",
    practice: "Identifique um ambiente em que uma pequena ação sua pode restaurar honestidade, cuidado ou justiça. Faça essa ação hoje.",
    questions: ["Onde percebo declínio do dharma ao meu redor?", "Que conhecimento precisa orientar minha ação?", "O que posso oferecer em vez de apenas exigir?"]
  },
  {
    title: "Karma Sannyāsa Yoga",
    subtitle: "Capítulo 5 · O yoga da renúncia na ação",
    sanskrit: "कर्मसंन्यासयोग",
    summary: "A relação entre renúncia e ação disciplinada é aprofundada. Krishna ensina que a liberdade interior pode ser cultivada enquanto a pessoa cumpre suas responsabilidades sem apropriação egoísta.",
    context: "A pergunta de Arjuna continua: é melhor renunciar ou agir? A resposta valoriza a ação sem apego e a visão equilibrada que reconhece dignidade nos diferentes seres.",
    themes: ["renúncia", "igualdade", "paz", "desapego", "visão"],
    verse: "Quem oferece suas ações ao divino e abandona o apego não é manchado por elas, assim como a folha de lótus não é molhada pela água.",
    reference: "Bhagavad Gītā 5.10 · síntese temática",
    reflection: "Renunciar ao ego na ação significa reduzir a necessidade de transformar cada tarefa em afirmação pessoal, posse ou superioridade.",
    practice: "Durante uma atividade habitual, formule interiormente a intenção de que ela seja bem realizada e beneficie além de você.",
    questions: ["O que preciso realizar sem transformar em identidade?", "Que apego torna minhas responsabilidades mais pesadas?", "Como cultivar uma visão mais igualitária dos seres?"]
  },
  {
    title: "Dhyāna Yoga",
    subtitle: "Capítulo 6 · O yoga da meditação",
    sanskrit: "ध्यानयोग",
    summary: "Krishna apresenta disciplina, moderação, postura, concentração e cuidado da mente. A prática meditativa é descrita como retorno paciente, não como ausência instantânea de pensamentos.",
    context: "Arjuna reconhece que a mente é inquieta e difícil de controlar. Krishna não nega essa dificuldade: responde que ela pode ser treinada por prática constante e desapego.",
    themes: ["meditação", "mente", "disciplina", "moderação", "constância"],
    verse: "Sempre que a mente inquieta se dispersar, conduza-a novamente para o centro, com perseverança.",
    reference: "Bhagavad Gītā 6.26 · síntese temática",
    reflection: "Distração não é o fracasso da meditação; perceber e retornar é parte da meditação. O mesmo princípio vale para hábitos e compromissos espirituais.",
    practice: "Sente-se por cinco minutos. Observe a respiração. Sempre que notar uma distração, reconheça-a sem condenação e retorne.",
    questions: ["Para onde minha mente retorna espontaneamente?", "Que excesso prejudica meu equilíbrio?", "Como transformar recomeço em disciplina?"]
  },
  {
    title: "Jñāna Vijñāna Yoga",
    subtitle: "Capítulo 7 · Conhecimento e realização",
    sanskrit: "ज्ञानविज्ञानयोग",
    summary: "Krishna aborda sua presença na natureza, a relação entre o manifestado e sua fonte, o poder de māyā e as diferentes motivações que levam as pessoas a buscar o divino.",
    context: "O conhecimento deixa de ser apenas conceito e aproxima-se de realização vivida. Conhecer algo sobre o divino e reconhecer sua presença na experiência são movimentos relacionados, mas não idênticos.",
    themes: ["conhecimento", "realização", "māyā", "natureza", "devoção"],
    verse: "Toda a existência permanece ligada à realidade divina como contas sustentadas por um fio.",
    reference: "Bhagavad Gītā 7.7 · síntese temática",
    reflection: "A contemplação espiritual procura perceber conexão sem apagar as diferenças concretas entre os seres.",
    practice: "Escolha três encontros — com uma pessoa, um ser vivo e um elemento da natureza — e contemple a interdependência presente em cada um.",
    questions: ["O que apenas sei e o que realmente compreendi?", "Que ilusão orienta repetidamente minhas escolhas?", "Como reconhecer unidade sem negar diversidade?"]
  },
  {
    title: "Akṣara Brahma Yoga",
    subtitle: "Capítulo 8 · O yoga do Brahman imperecível",
    sanskrit: "अक्षरब्रह्मयोग",
    summary: "Arjuna pergunta sobre Brahman, o self, a ação e a passagem da vida. Krishna enfatiza a direção da consciência e a lembrança constante do divino.",
    context: "Aquilo que ocupa profundamente a mente não é produzido de improviso, mas cultivado por hábitos de atenção e devoção.",
    themes: ["Brahman", "lembrança", "morte", "consciência", "continuidade"],
    verse: "Lembre-se do divino e, ao mesmo tempo, cumpra sua ação; oriente mente e entendimento para o mais elevado.",
    reference: "Bhagavad Gītā 8.7 · síntese temática",
    reflection: "Lembrança espiritual não exige abandonar as responsabilidades. Ela transforma a qualidade de presença com que trabalhamos, cuidamos e atravessamos mudanças.",
    practice: "Escolha uma palavra sagrada, mantra ou qualidade divina. Retorne a ela três vezes ao longo do dia, especialmente antes de decisões.",
    questions: ["O que tenho treinado minha mente para lembrar?", "Como integrar contemplação e responsabilidade?", "Que preparação espiritual desejo cultivar para as transições da vida?"]
  },
  {
    title: "Rāja Vidyā Rāja Guhya Yoga",
    subtitle: "Capítulo 9 · O conhecimento soberano e o mistério soberano",
    sanskrit: "राजविद्याराजगुह्ययोग",
    summary: "Krishna apresenta um ensinamento íntimo sobre a presença divina na existência, a relação entre transcendência e imanência e a força de uma oferenda simples feita com devoção.",
    context: "A grandeza do divino não torna inútil o gesto pequeno; quando a intenção é sincera, aquilo que é simples pode tornar-se oferenda.",
    themes: ["presença divina", "bhakti", "oferenda", "confiança", "graça"],
    verse: "Uma folha, uma flor, um fruto ou água, quando oferecidos com devoção sincera, são acolhidos.",
    reference: "Bhagavad Gītā 9.26 · síntese temática",
    reflection: "A devoção pode começar quando aquilo que já fazemos é oferecido com atenção, gratidão e amor.",
    practice: "Escolha algo simples — água, alimento, uma flor ou uma tarefa — e ofereça interiormente com gratidão.",
    questions: ["Que gesto simples pode expressar minha devoção?", "O que faço mecanicamente e poderia oferecer com presença?", "Como a confiança transforma minha relação com o sagrado?"]
  },
  {
    title: "Vibhūti Yoga",
    subtitle: "Capítulo 10 · O yoga das manifestações divinas",
    sanskrit: "विभूतियोग",
    summary: "Krishna enumera manifestações de grandeza, beleza, poder e sabedoria pelas quais o sagrado pode ser contemplado no mundo.",
    context: "As manifestações funcionam como pontos de contemplação que educam a percepção para reconhecer o extraordinário no interior da existência comum.",
    themes: ["manifestações", "contemplação", "beleza", "grandeza", "presença"],
    verse: "O divino é o princípio interior presente nos seres, seu começo, continuidade e fim.",
    reference: "Bhagavad Gītā 10.20 · síntese temática",
    reflection: "Beleza, coragem e inteligência podem recordar uma fonte maior quando a admiração não termina em posse ou comparação.",
    practice: "Registre três manifestações de beleza ou excelência que encontrar hoje e contemple o que elas despertam.",
    questions: ["O que desperta reverência em mim?", "Consigo admirar sem invejar?", "Que manifestação do sagrado tenho ignorado?"]
  },
  {
    title: "Viśvarūpa Darśana Yoga",
    subtitle: "Capítulo 11 · A visão da forma universal",
    sanskrit: "विश्वरूपदर्शनयोग",
    summary: "Arjuna recebe a visão da forma universal de Krishna. A experiência reúne beleza, multiplicidade, criação, destruição e o movimento do tempo.",
    context: "O encontro com o ilimitado também produz temor: o sagrado não é reduzido ao que conforta.",
    themes: ["forma universal", "tempo", "reverência", "limite humano", "transformação"],
    verse: "Na visão universal, Krishna revela também a força do tempo que conduz os seres e transforma os mundos.",
    reference: "Bhagavad Gītā 11.32 · síntese temática",
    reflection: "A realidade inclui nascimento e dissolução, encontro e perda. A visão espiritual amplia o horizonte no qual essa tensão é contemplada.",
    practice: "Contemple por alguns minutos algo em transformação — o céu, uma planta ou uma fotografia antiga — e reconheça a impermanência.",
    questions: ["Que aspecto da realidade tento excluir de minha espiritualidade?", "Como reverência difere de controle?", "O que a consciência do tempo muda em minhas prioridades?"]
  },
  {
    title: "Bhakti Yoga",
    subtitle: "Capítulo 12 · O yoga da devoção",
    sanskrit: "भक्तियोग",
    summary: "Krishna descreve o caminho da devoção e apresenta qualidades do devoto: ausência de hostilidade, amizade, compaixão, humildade, equilíbrio e perseverança.",
    context: "A devoção não é tratada apenas como emoção intensa ou ritual externo. Ela se manifesta no caráter e na forma de relacionar-se com os seres.",
    themes: ["devoção", "amor", "compaixão", "humildade", "entrega"],
    verse: "Aquele que não alimenta ódio, é amistoso e compassivo, reduz o egoísmo e permanece equilibrado é querido no caminho da devoção.",
    reference: "Bhagavad Gītā 12.13–14 · síntese temática",
    reflection: "O amor ao divino é testado na maneira como tratamos pessoas difíceis, seres vulneráveis e situações que não alimentam nosso orgulho.",
    practice: "Escolha uma qualidade — amizade, compaixão, humildade ou paciência — e expresse-a deliberadamente em uma relação hoje.",
    questions: ["Minha devoção aparece no meu caráter?", "Como manter limites sem alimentar hostilidade?", "Que qualidade devocional preciso cultivar?"]
  },
  {
    title: "Kṣetra Kṣetrajña Vibhāga Yoga",
    subtitle: "Capítulo 13 · O campo e o conhecedor do campo",
    sanskrit: "क्षेत्रक्षेत्रज्ञविभागयोग",
    summary: "O corpo e a experiência condicionada são apresentados como campo; aquele que conhece o campo conduz à investigação sobre consciência, natureza e conhecimento.",
    context: "Diferentes escolas interpretam de modo distinto a relação entre o conhecedor individual e o princípio supremo.",
    themes: ["corpo", "consciência", "prakṛti", "puruṣa", "conhecimento"],
    verse: "O corpo é chamado campo; aquele que o conhece é chamado conhecedor do campo.",
    reference: "Bhagavad Gītā 13.2 · síntese temática",
    reflection: "Observar pensamentos, emoções e sensações como experiências no campo não significa rejeitá-los. Significa reconhecer que nenhuma experiência isolada esgota aquilo que somos.",
    practice: "Durante cinco minutos, nomeie silenciosamente: sensação, pensamento, emoção. Observe cada fenômeno surgir e mudar.",
    questions: ["O que observo em mim e o que parece ser o observador?", "Que experiência temporária confundo com identidade total?", "Como cuidar do corpo sem reduzir-me ao corpo?"]
  },
  {
    title: "Guṇatraya Vibhāga Yoga",
    subtitle: "Capítulo 14 · O yoga dos três guṇas",
    sanskrit: "गुणत्रयविभागयोग",
    summary: "Sattva, rajas e tamas são apresentados como qualidades da natureza que influenciam clareza, atividade, desejo, inércia e percepção.",
    context: "Os guṇas ajudam a observar tendências em movimento e a compreender como certos estados condicionam ação e consciência.",
    themes: ["sattva", "rajas", "tamas", "natureza", "liberdade"],
    verse: "Sattva, rajas e tamas surgem da natureza e vinculam a consciência à experiência condicionada.",
    reference: "Bhagavad Gītā 14.5 · síntese temática",
    reflection: "Clareza pode converter-se em orgulho; atividade pode tornar-se agitação; repouso pode transformar-se em inércia. Discernir os guṇas exige observar efeitos.",
    practice: "Ao final do dia, registre um momento de clareza, um de agitação e um de inércia. Identifique o que alimentou cada estado.",
    questions: ["Qual guṇa predominou hoje?", "O que aumenta clareza sem gerar superioridade?", "Que hábito transforma repouso em estagnação?"]
  },
  {
    title: "Puruṣottama Yoga",
    subtitle: "Capítulo 15 · O yoga do Ser Supremo",
    sanskrit: "पुरुषोत्तमयोग",
    summary: "A imagem da árvore cósmica de raízes para o alto introduz uma reflexão sobre o mundo condicionado, o desapego e o princípio supremo.",
    context: "A árvore representa uma existência ampla e sustentada por uma origem que não é imediatamente visível. O discernimento precisa cortar o apego, não destruir o cuidado pela vida.",
    themes: ["árvore cósmica", "desapego", "origem", "Ser Supremo", "discernimento"],
    verse: "A existência é comparada a uma árvore de raízes para o alto e ramos para baixo; conhecê-la exige compreender sua fonte.",
    reference: "Bhagavad Gītā 15.1 · síntese temática",
    reflection: "Muitas vezes cuidamos apenas dos ramos visíveis — desempenho, imagem e posse — sem examinar a raiz que orienta nossos desejos e escolhas.",
    practice: "Desenhe uma árvore: nos ramos, escreva suas atividades; no tronco, seus valores; nas raízes, aquilo que considera sagrado.",
    questions: ["Que raiz sustenta minhas escolhas?", "Que ramo tomou energia demais?", "O que preciso cortar como apego, sem abandonar responsabilidade?"]
  },
  {
    title: "Daivāsura Sampad Vibhāga Yoga",
    subtitle: "Capítulo 16 · Qualidades divinas e destrutivas",
    sanskrit: "दैवासुरसम्पद्विभागयोग",
    summary: "O capítulo contrasta disposições que favorecem liberdade com tendências marcadas por arrogância, violência, desejo desordenado e confusão ética.",
    context: "As categorias convidam ao exame do caráter, não à condenação simplista de grupos de pessoas. Qualidades diferentes podem manifestar-se na mesma pessoa.",
    themes: ["ética", "caráter", "autocontrole", "orgulho", "violência"],
    verse: "Coragem, pureza, firmeza no conhecimento, generosidade, autocontrole, honestidade e compaixão integram as qualidades que conduzem à liberdade.",
    reference: "Bhagavad Gītā 16.1–3 · síntese temática",
    reflection: "A espiritualidade pode ser usada para esconder orgulho, agressividade ou desejo de controle. O capítulo desloca a avaliação para os frutos reais da prática.",
    practice: "Escolha uma qualidade ética e defina uma ação observável que a expresse nas próximas 24 horas.",
    questions: ["Que fruto meu caminho espiritual produz?", "Onde orgulho se apresenta como certeza?", "Que qualidade preciso fortalecer por repetição?"]
  },
  {
    title: "Śraddhātraya Vibhāga Yoga",
    subtitle: "Capítulo 17 · O yoga das três formas de fé",
    sanskrit: "श्रद्धात्रयविभागयोग",
    summary: "Fé, alimentação, oferenda, austeridade e caridade são examinadas segundo os guṇas, com atenção à intenção e à maneira como cada prática é realizada.",
    context: "Não basta perguntar o que alguém faz; é necessário observar por que, como e com quais efeitos. Uma disciplina exterior pode ser clara, agitada ou destrutiva conforme sua motivação.",
    themes: ["śraddhā", "intenção", "disciplina", "caridade", "austeridade"],
    verse: "A fé de uma pessoa acompanha a qualidade profunda de sua disposição; aquilo em que ela deposita fé orienta o que se torna.",
    reference: "Bhagavad Gītā 17.3 · síntese temática",
    reflection: "A fé não vive apenas nas ideias declaradas. Ela aparece no que recebe nosso tempo, nossa confiança, nossa energia e nossos sacrifícios.",
    practice: "Observe seu uso de tempo e atenção durante um dia. Ao final, pergunte o que suas escolhas revelam que você considera digno de fé.",
    questions: ["O que minhas escolhas revelam sobre minha fé?", "Minha disciplina gera clareza ou vaidade?", "Como oferecer ou ajudar sem humilhar?"]
  },
  {
    title: "Mokṣa Sannyāsa Yoga",
    subtitle: "Capítulo 18 · O yoga da libertação e da renúncia",
    sanskrit: "मोक्षसंन्यासयोग",
    summary: "O capítulo final reúne conhecimento, ação, dever, renúncia, os guṇas, devoção e entrega. Arjuna declara que sua confusão foi dissipada e recupera a disposição para agir.",
    context: "Krishna não elimina a liberdade de Arjuna. Depois de apresentar o ensinamento, convida-o a refletir e decidir.",
    themes: ["mokṣa", "renúncia", "svadharma", "entrega", "decisão"],
    verse: "Após transmitir o ensinamento, Krishna convida Arjuna a examiná-lo plenamente e então agir segundo sua decisão.",
    reference: "Bhagavad Gītā 18.63 · síntese temática",
    reflection: "Orientação espiritual autêntica não substitui consciência por dependência. Ela oferece visão e disciplina para que a pessoa responda com responsabilidade.",
    practice: "Retome uma decisão importante. Registre: o que aprendi, qual princípio reconheço, qual ação me cabe e o que preciso entregar.",
    questions: ["Minha confusão diminuiu ou apenas minha ansiedade?", "Que decisão agora precisa tornar-se ação?", "Como unir entrega e responsabilidade?"]
  }
];

function chapterNumberFromUrl() {
  const value = Number.parseInt(new URLSearchParams(window.location.search).get("capitulo") || "1", 10);
  return Number.isInteger(value) && value >= 1 && value <= chapters.length ? value : 1;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderChapter() {
  const number = chapterNumberFromUrl();
  const chapter = chapters[number - 1];

  document.title = `${chapter.title} | Luz do Sanātana Dharma`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", `${chapter.subtitle}. Contexto, temas, reflexão e prática devocional.`);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${chapter.title} | Luz do Sanātana Dharma`);

  setText("#breadcrumb-chapter", `Capítulo ${number}`);
  setText("#chapter-sanskrit", chapter.sanskrit);
  setText("#chapter-title", chapter.title);
  setText("#chapter-subtitle", chapter.subtitle);
  setText("#overview-heading", `Capítulo ${number}: ${chapter.title}`);
  setText("#chapter-summary", chapter.summary);
  setText("#chapter-context", chapter.context);
  setText("#chapter-verse", chapter.verse);
  setText("#chapter-reference", chapter.reference);
  setText("#chapter-reflection", chapter.reflection);
  setText("#chapter-practice", chapter.practice);

  const themes = document.querySelector("#chapter-themes");
  if (themes) {
    themes.replaceChildren(...chapter.themes.map((theme) => {
      const span = document.createElement("span");
      span.textContent = theme;
      return span;
    }));
  }

  const questions = document.querySelector("#chapter-questions");
  if (questions) {
    questions.replaceChildren(...chapter.questions.map((question) => {
      const item = document.createElement("li");
      item.textContent = question;
      return item;
    }));
  }

  const previous = document.querySelector("#previous-chapter");
  const next = document.querySelector("#next-chapter");

  if (previous) {
    previous.href = number > 1 ? `capitulo.html?capitulo=${number - 1}` : "gita.html";
    previous.textContent = number > 1 ? `← Capítulo ${number - 1}` : "← Voltar à trilha";
  }

  if (next) {
    next.href = number < chapters.length ? `capitulo.html?capitulo=${number + 1}` : "gita.html";
    next.textContent = number < chapters.length ? `Capítulo ${number + 1} →` : "Concluir trilha →";
  }
}

renderChapter();
