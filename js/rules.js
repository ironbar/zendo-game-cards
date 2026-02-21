import { UI, RULES, getLang, setLang } from './i18n.js';

const state = {
  lang: getLang(),
};

const rulesTitle = document.getElementById('rules-title');
const rulesHeading = document.getElementById('rules-heading');
const rulesIntro = document.getElementById('rules-intro');
const rulesSummary = document.getElementById('rules-summary');
const rulesList = document.getElementById('rules-list');
const rulesOutro = document.getElementById('rules-outro');
const homeLink = document.getElementById('home-link');
const languageToggle = document.querySelector('.language-toggle');

const updateLanguageButtons = () => {
  languageToggle.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === state.lang);
  });
};

const renderRules = () => {
  const content = RULES[state.lang];
  const labels = UI[state.lang];

  rulesTitle.textContent = content.title;
  rulesHeading.textContent = content.title;
  rulesIntro.textContent = content.intro;
  rulesSummary.textContent = content.intro;
  rulesOutro.textContent = content.outro;
  homeLink.textContent = labels.homeLink;

  rulesList.innerHTML = '';
  content.bullets.forEach((bullet) => {
    const li = document.createElement('li');
    li.textContent = bullet;
    rulesList.appendChild(li);
  });
};

const setLanguage = (lang) => {
  state.lang = setLang(lang);
  updateLanguageButtons();
  renderRules();
};

languageToggle.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button && button.dataset.lang) {
    setLanguage(button.dataset.lang);
  }
});

setLanguage(state.lang);
