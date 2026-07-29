const devotionalEntries = [
  {
    source: "Bhagavad Gītā",
    theme: "Ação sem apego",
    heading: "Faça o que precisa ser feito com presença",
    verse: "“Você tem direito à ação, mas não aos seus frutos.”",
    reference: "Bhagavad Gītā 2.47 · síntese do ensinamento",
    context: "No campo de Kurukṣetra, Arjuna está paralisado diante das consequências de agir. Krishna o conduz a distinguir o dever presente do desejo de controlar todos os resultados.",
    reflection: "Agir com desapego não significa indiferença. Significa dedicar atenção, disciplina e integridade ao que está sob nossa responsabilidade, sem transformar o resultado em medida absoluta de nosso valor.",
    practice: "Escolha uma tarefa importante. Antes de começar, respire três vezes e formule a intenção de realizá-la com cuidado, sem ansiedade pelo reconhecimento.",
    question: "Qual ação correta está diante de mim hoje, mesmo que eu não possa controlar seu resultado?"
  },
  {
    source: "Bhagavad Gītā",
    theme: "Svadharma",
    heading: "Honre o caminho que cabe a você",
    verse: "“É melhor cumprir o próprio dever, ainda que imperfeitamente, do que imitar perfeitamente o dever de outro.”",
    reference: "Bhagavad Gītā 3.35 · sentido do ensinamento",
    context: "Krishna apresenta a Arjuna o princípio de svadharma: a responsabilidade concreta que nasce da própria condição, natureza e lugar na vida.",
    reflection: "Comparações podem nos afastar da tarefa que realmente nos pertence. O caminho pessoal não é uma licença para agir sem ética; é um chamado para reconhecer responsabilidades que ninguém pode realizar exatamente em nosso lugar.",
    practice: "Anote uma responsabilidade que você tem adiado por observar demais a trajetória de outras pessoas. Dê hoje um passo pequeno e honesto em direção a ela.",
    question: "Que parte do meu dharma estou deixando de viver por tentar seguir o caminho de outra pessoa?"
  },
  {
    source: "Bhagavad Gītā",
    theme: "Cuidado da mente",
    heading: "Torne-se aliado de sua própria mente",
    verse: "“Que a pessoa se eleve por meio de si mesma e não se degrade; a mente pode ser amiga e também adversária.”",
    reference: "Bhagavad Gītā 6.5 · síntese do ensinamento",
    context: "Ao ensinar sobre a disciplina meditativa, Krishna mostra que a mente educada favorece o caminho, enquanto a mente desgovernada amplia confusão e sofrimento.",
    reflection: "Autodomínio não é violência contra si. É aprender a perceber impulsos, hábitos e pensamentos antes que eles decidam nossas ações. A disciplina começa em escolhas repetidas, não em perfeição imediata.",
    practice: "Observe durante cinco minutos o fluxo da respiração. Quando surgir uma distração, reconheça-a sem se condenar e retorne ao ponto de atenção.",
    question: "Que hábito tornaria minha mente uma aliada mais constante?"
  },
  {
    source: "Bhagavad Gītā",
    theme: "Retorno ao centro",
    heading: "Volte com paciência cada vez que se dispersar",
    verse: "“Sempre que a mente inquieta se afastar, conduza-a novamente para o centro.”",
    reference: "Bhagavad Gītā 6.26 · sentido do ensinamento",
    context: "A meditação é apresentada como um treinamento contínuo. A distração não encerra a prática; o retorno faz parte dela.",
    reflection: "Muitas mudanças fracassam porque tratamos um desvio como derrota definitiva. O ensinamento aponta outro modo: perceber, corrigir e retornar. A constância nasce dessa disposição de recomeçar.",
    practice: "Escolha hoje um ponto de retorno: uma respiração consciente, um mantra ou um minuto de silêncio. Use-o sempre que perceber agitação excessiva.",
    question: "Para onde desejo conduzir minha atenção quando ela se perde?"
  },
  {
    source: "Bhagavad Gītā",
    theme: "Compaixão",
    heading: "Cultive firmeza sem hostilidade",
    verse: "“Aquele que não odeia ser algum, que é amistoso e compassivo, é querido no caminho da devoção.”",
    reference: "Bhagavad Gītā 12.13–14 · síntese do ensinamento",
    context: "Ao descrever qualidades do devoto, Krishna reúne compaixão, ausência de egoísmo, equilíbrio e perseverança.",
    reflection: "Compaixão não exige concordar com tudo nem abandonar limites. Ela transforma a maneira de enxergar os seres, reduzindo a necessidade de alimentar hostilidade e superioridade.",
    practice: "Diante de uma pessoa difícil, procure separar a conduta que precisa ser enfrentada da dignidade do ser que está diante de você.",
    question: "Como posso preservar meus limites sem alimentar ódio?"
  },
  {
    source: "Bhagavad Gītā",
    theme: "Dharma restaurado",
    heading: "A justiça também precisa de presença",
    verse: "“Quando o dharma declina e o adharma prevalece, o divino se manifesta para restaurar o equilíbrio.”",
    reference: "Bhagavad Gītā 4.7–8 · síntese do ensinamento",
    context: "Krishna explica sua manifestação em momentos de declínio do dharma, associando proteção, transformação e restabelecimento da ordem.",
    reflection: "O ensinamento não convida à passividade diante da injustiça. Ele recorda que a preservação do dharma exige discernimento, coragem e ação orientada por princípios, não apenas indignação.",
    practice: "Identifique uma situação concreta em que você pode contribuir para mais justiça, honestidade ou cuidado. Defina uma ação realizável para hoje.",
    question: "Em qual ambiente minha presença pode favorecer o dharma?"
  },
  {
    source: "Bhagavad Gītā",
    theme: "Entrega",
    heading: "Reconheça o limite do controle",
    verse: "“Refugie-se no divino de todo o coração e não permaneça aprisionado pelo medo.”",
    reference: "Bhagavad Gītā 18.66 · reflexão inspirada no ensinamento",
    context: "Ao final do diálogo, Krishna conduz Arjuna da confusão para uma decisão consciente, reunindo conhecimento, ação, devoção e entrega.",
    reflection: "Entrega espiritual não elimina responsabilidade. Depois de examinar, discernir e agir, existe um ponto em que precisamos aceitar que a realidade é maior do que nossa capacidade de controle.",
    practice: "Escreva em duas colunas: ‘o que depende de mim’ e ‘o que preciso entregar’. Aja sobre a primeira e faça silêncio diante da segunda.",
    question: "O que tenho tentado controlar além do que realmente me cabe?"
  }
];

const elements = {
  source: document.querySelector("#devotional-source"),
  date: document.querySelector("#devotional-date"),
  theme: document.querySelector("#devotional-theme"),
  heading: document.querySelector("#devotional-heading"),
  verse: document.querySelector("#devotional-verse"),
  reference: document.querySelector("#devotional-reference"),
  context: document.querySelector("#devotional-context"),
  reflection: document.querySelector("#devotional-reflection"),
  practice: document.querySelector("#devotional-practice"),
  question: document.querySelector("#devotional-question")
};

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const difference = date - start;
  return Math.floor(difference / 86400000);
}

let currentEntry = dayOfYear(new Date()) % devotionalEntries.length;

function renderDevotional(index) {
  const entry = devotionalEntries[index];
  if (!entry || Object.values(elements).some((element) => !element)) return;

  elements.source.textContent = entry.source;
  elements.theme.textContent = entry.theme;
  elements.heading.textContent = entry.heading;
  elements.verse.textContent = entry.verse;
  elements.reference.textContent = entry.reference;
  elements.context.textContent = entry.context;
  elements.reflection.textContent = entry.reflection;
  elements.practice.textContent = entry.practice;
  elements.question.textContent = entry.question;
  elements.date.textContent = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date());
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function devotionalAsText(entry) {
  return [
    entry.heading,
    "",
    entry.verse,
    entry.reference,
    "",
    `Reflexão: ${entry.reflection}`,
    "",
    `Prática: ${entry.practice}`,
    "",
    `Contemplação: ${entry.question}`,
    "",
    "Luz do Sanātana Dharma"
  ].join("\n");
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function initializeTheme() {
  const root = document.documentElement;
  const button = document.querySelector(".theme-button");
  const icon = document.querySelector(".theme-icon");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const savedTheme = localStorage.getItem("sanatana-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
    if (metaTheme) metaTheme.content = theme === "dark" ? "#191311" : "#5b1f2a";
  }

  applyTheme(savedTheme || preferredTheme);

  button?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("sanatana-theme", nextTheme);
  });
}

function initializeMenu() {
  const button = document.querySelector(".menu-button");
  const navigation = document.querySelector("#main-nav");
  if (!button || !navigation) return;

  button.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !button.contains(event.target)) {
      navigation.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    }
  });
}

function initializeLibrarySearch() {
  const input = document.querySelector("#library-search");
  const cards = [...document.querySelectorAll(".library-card")];
  const emptyState = document.querySelector("#library-empty");
  if (!input || !cards.length) return;

  input.addEventListener("input", () => {
    const query = normalizeText(input.value);
    let visibleCount = 0;

    cards.forEach((card) => {
      const content = normalizeText(`${card.dataset.search || ""} ${card.textContent}`);
      const matches = !query || content.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount > 0;
  });
}

function initializeAccordion() {
  document.querySelectorAll(".accordion-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
      const indicator = button.querySelector("span:last-child");
      if (indicator) indicator.textContent = expanded ? "+" : "−";
    });
  });
}

function initializeDevotionalActions() {
  document.querySelector("#next-devotional")?.addEventListener("click", () => {
    currentEntry = (currentEntry + 1) % devotionalEntries.length;
    renderDevotional(currentEntry);
  });

  document.querySelector("#copy-devotional")?.addEventListener("click", async () => {
    const text = devotionalAsText(devotionalEntries[currentEntry]);
    try {
      await navigator.clipboard.writeText(text);
      showToast("Reflexão copiada.");
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      showToast("Reflexão copiada.");
    }
  });
}

function initializeServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {
        // O site continua funcional mesmo quando o navegador bloqueia o service worker.
      });
    });
  }
}

renderDevotional(currentEntry);
initializeTheme();
initializeMenu();
initializeLibrarySearch();
initializeAccordion();
initializeDevotionalActions();
initializeServiceWorker();

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();
