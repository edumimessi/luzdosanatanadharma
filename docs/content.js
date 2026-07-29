function normalizeReaderText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function initializeReaderTheme() {
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

function initializeReaderMenu() {
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

function initializeReaderFilter() {
  const input = document.querySelector("#reader-filter");
  const cards = [...document.querySelectorAll("[data-reader-card]")];
  const emptyState = document.querySelector("#reader-empty");
  if (!input || !cards.length) return;

  input.addEventListener("input", () => {
    const query = normalizeReaderText(input.value);
    let visibleCount = 0;

    cards.forEach((card) => {
      const searchable = normalizeReaderText(`${card.dataset.search || ""} ${card.textContent}`);
      const visible = !query || searchable.includes(query);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount > 0;
  });
}

function initializeChapterLinks() {
  document.querySelectorAll(".chapter-card").forEach((card, index) => {
    if (card.querySelector("a")) return;
    const link = document.createElement("a");
    link.className = "text-link";
    link.href = `capitulo.html?capitulo=${index + 1}`;
    link.textContent = "Abrir estudo →";
    link.style.marginTop = "1rem";
    card.appendChild(link);
  });
}

function initializeServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
}

initializeReaderTheme();
initializeReaderMenu();
initializeReaderFilter();
initializeChapterLinks();
initializeServiceWorker();

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();
