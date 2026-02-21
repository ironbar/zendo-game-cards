export const UI = {
  en: {
    title: 'Zendo Card Generator',
    generate: 'Generate card',
    history: 'History',
    previous: 'Previous',
    next: 'Next',
    noCard: 'Generate a card to start.',
    noMore: 'No new cards left for this difficulty.',
    difficultyLabel: 'Difficulty',
    difficulties: {
      easy: 'Easy',
      medium: 'Medium',
      difficult: 'Difficult',
    },
    rulesLink: 'Rules',
    homeLink: 'Card Generator',
    languageLabel: 'Language',
    historyCounter: (current, total) => `${current} of ${total}`,
  },
  es: {
    title: 'Generador de cartas de Zendo',
    generate: 'Generar carta',
    history: 'Historial',
    previous: 'Anterior',
    next: 'Siguiente',
    noCard: 'Genera una carta para empezar.',
    noMore: 'No quedan cartas nuevas para esta dificultad.',
    difficultyLabel: 'Dificultad',
    difficulties: {
      easy: 'Fácil',
      medium: 'Medio',
      difficult: 'Difícil',
    },
    rulesLink: 'Reglas',
    homeLink: 'Generador',
    languageLabel: 'Idioma',
    historyCounter: (current, total) => `${current} de ${total}`,
  },
};

export const RULES = {
  en: {
    title: 'How to Play (Quick summary)',
    intro: 'Zendo is an inductive logic game. Use the generator to get a secret rule and then test it by building structures.',
    bullets: [
      'Pick a difficulty and generate a rule. The site already randomizes any choices, so the rule shown is final.',
      'One player is the Moderator and keeps the rule secret from the others.',
      'The Moderator builds two starting structures: one that follows the rule and one that does not.',
      'Players take turns building new structures while the Moderator confirms whether each follows the rule.',
      'Players can make guesses at any time; the first rule the Moderator cannot disprove wins.',
      'Rules must depend only on the structure itself (no outside references), except the playing surface for groundedness/orientation.',
    ],
    outro: 'Tip: Start with Easy cards for new players and raise the difficulty as needed.',
    pdfLink: 'Zendo Rules Book 1 (PDF)',
  },
  es: {
    title: 'Cómo jugar (resumen rápido)',
    intro: 'Zendo es un juego de lógica inductiva. Usa el generador para obtener una regla secreta y luego ponerla a prueba con estructuras.',
    bullets: [
      'Elige una dificultad y genera una regla. El sitio ya resuelve las opciones al azar, así que la regla mostrada es final.',
      'Una persona es el Moderador y mantiene la regla en secreto.',
      'El Moderador construye dos estructuras iniciales: una que cumple la regla y otra que no.',
      'Los jugadores, por turnos, construyen nuevas estructuras y el Moderador confirma si cumplen la regla.',
      'Los jugadores pueden hacer conjeturas en cualquier momento; gana la primera regla que el Moderador no pueda refutar.',
      'Las reglas solo pueden depender de la estructura en sí (sin referencias externas), excepto la superficie para apoyo/orientación.',
    ],
    outro: 'Consejo: Empieza con cartas fáciles para jugadores nuevos y sube la dificultad cuando tengan práctica.',
    pdfLink: 'Libro de reglas Zendo 1 (PDF)',
  },
};

export const LANG_KEY = 'zendo_lang';

export const getLang = () => {
  const stored = window.localStorage.getItem(LANG_KEY);
  return stored === 'en' ? 'en' : 'es';
};

export const setLang = (lang) => {
  const safeLang = lang === 'en' ? 'en' : 'es';
  window.localStorage.setItem(LANG_KEY, safeLang);
  document.documentElement.setAttribute('lang', safeLang);
  return safeLang;
};
