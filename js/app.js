import { cards, resolveCard, renderRuleHtml } from '../data/cards.js';
import { difficultyLabels } from '../data/options.js';
import { UI, getLang, setLang } from './i18n.js';

const cardsById = new Map(cards.map((card) => [card.id, card]));

const state = {
  lang: getLang(),
  difficulty: 'easy',
  history: [],
  index: -1,
};

const pageTitle = document.getElementById('page-title');
const pageSubtitle = document.getElementById('page-subtitle');
const rulesLink = document.getElementById('rules-link');
const difficultyLabel = document.getElementById('difficulty-label');
const difficultyHelper = document.getElementById('difficulty-helper');
const generateButton = document.getElementById('generate-button');
const cardSlot = document.getElementById('card-slot');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const historyMeta = document.getElementById('history-meta');
const difficultyGroup = document.getElementById('difficulty-group');
const languageToggle = document.querySelector('.language-toggle');

const updateLanguageButtons = () => {
  languageToggle.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === state.lang);
  });
};

const updateDifficultyButtons = () => {
  difficultyGroup.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('active', button.dataset.difficulty === state.difficulty);
    button.textContent = UI[state.lang].difficulties[button.dataset.difficulty];
  });
};

const updateStaticText = () => {
  const labels = UI[state.lang];
  pageTitle.textContent = labels.title;
  pageSubtitle.textContent = labels.subtitle;
  rulesLink.textContent = labels.rulesLink;
  difficultyLabel.textContent = labels.difficultyLabel;
  difficultyHelper.textContent = labels.difficultyHelper;
  generateButton.textContent = labels.generate;
  prevButton.textContent = labels.previous;
  nextButton.textContent = labels.next;
};

const renderEmptyState = () => {
  cardSlot.innerHTML = `<div class="card"><div class="card-rule">${UI[state.lang].noCard}</div></div>`;
  historyMeta.textContent = '';
  prevButton.disabled = true;
  nextButton.disabled = true;
};

const renderCard = () => {
  if (state.index < 0 || state.index >= state.history.length) {
    renderEmptyState();
    return;
  }

  const entry = state.history[state.index];
  const card = cardsById.get(entry.cardId);
  if (!card) {
    renderEmptyState();
    return;
  }

  const labels = UI[state.lang];
  const difficultyText = difficultyLabels[state.lang][card.difficulty];

  cardSlot.innerHTML = `
    <article class="card">
      <div class="card-header">
        <div class="card-difficulty">
          <span class="difficulty-pill ${card.difficulty}">${difficultyText}</span>
        </div>
        <span>#${card.id}</span>
      </div>
      <div class="card-rule">${renderRuleHtml(card, entry.selections, state.lang)}</div>
      <div class="card-meta">${labels.history} ${labels.historyCounter(state.index + 1, state.history.length)}</div>
    </article>
  `;

  historyMeta.textContent = labels.historyCounter(state.index + 1, state.history.length);
  prevButton.disabled = state.index <= 0;
  nextButton.disabled = state.index >= state.history.length - 1;
};

const generateCard = () => {
  const filtered = cards.filter((card) => card.difficulty === state.difficulty);
  const card = filtered[Math.floor(Math.random() * filtered.length)];
  const resolved = resolveCard(card);

  state.history.push(resolved);
  state.index = state.history.length - 1;
  renderCard();
};

const setDifficulty = (difficulty) => {
  state.difficulty = difficulty;
  updateDifficultyButtons();
};

const setLanguage = (lang) => {
  state.lang = setLang(lang);
  updateLanguageButtons();
  updateDifficultyButtons();
  updateStaticText();
  renderCard();
};

languageToggle.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button && button.dataset.lang) {
    setLanguage(button.dataset.lang);
  }
});

difficultyGroup.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button && button.dataset.difficulty) {
    setDifficulty(button.dataset.difficulty);
  }
});

generateButton.addEventListener('click', () => {
  generateCard();
});

prevButton.addEventListener('click', () => {
  if (state.index > 0) {
    state.index -= 1;
    renderCard();
  }
});

nextButton.addEventListener('click', () => {
  if (state.index < state.history.length - 1) {
    state.index += 1;
    renderCard();
  }
});

setLanguage(state.lang);
setDifficulty(state.difficulty);
renderEmptyState();
