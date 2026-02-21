export const UI = {
  en: {
    title: 'Zendo Rule Cards',
    subtitle: 'Generate a random rule card and keep your history.',
    generate: 'Generate card',
    history: 'History',
    previous: 'Previous',
    next: 'Next',
    noCard: 'Generate a card to start.',
    difficultyLabel: 'Difficulty',
    difficulties: {
      easy: 'Easy',
      medium: 'Medium',
      difficult: 'Difficult',
    },
    difficultyHelper: 'Pick a difficulty and generate a random card.',
    rulesLink: 'Rules',
    homeLink: 'Card Generator',
    languageLabel: 'Language',
    historyCounter: (current, total) => `${current} of ${total}`,
  },
  es: {
    title: 'Cartas de reglas Zendo',
    subtitle: 'Genera una regla aleatoria y guarda el historial.',
    generate: 'Generar carta',
    history: 'Historial',
    previous: 'Anterior',
    next: 'Siguiente',
    noCard: 'Genera una carta para empezar.',
    difficultyLabel: 'Dificultad',
    difficulties: {
      easy: 'Fácil',
      medium: 'Medio',
      difficult: 'Difícil',
    },
    difficultyHelper: 'Elige una dificultad y genera una carta al azar.',
    rulesLink: 'Reglas',
    homeLink: 'Generador',
    languageLabel: 'Idioma',
    historyCounter: (current, total) => `${current} de ${total}`,
  },
};

export const RULES = {
  en: {
    title: 'How to Play (Book 1 summary)',
    intro: 'Zendo is an inductive logic game. Players try to discover a secret rule by building and testing structures.',
    bullets: [
      'One player is the Moderator and chooses a secret rule card, locking choices with clips.',
      'The Moderator builds two starting structures: one that follows the rule (white token) and one that does not (black token).',
      'Players take turns building new structures and learn whether each follows the rule.',
      'Players can make guesses; official guesses require guessing tokens earned by correct predictions.',
      'Always use both clips, even on cards with fewer choices, to avoid giving clues.',
      'Do not embellish or change the wording on the card.',
      'Rules cannot reference anything outside the structure, except the playing surface for groundedness/orientation.',
      'If needed, the Moderator can move structures or break them down to free pieces.',
    ],
    outro: 'The first player whose rule cannot be disproved by the Moderator wins.',
  },
  es: {
    title: 'Cómo jugar (resumen del libro 1)',
    intro: 'Zendo es un juego de lógica inductiva. Los jugadores intentan descubrir una regla secreta construyendo y probando estructuras.',
    bullets: [
      'Una persona es Moderador y elige una carta de regla, fijando las opciones con clips.',
      'El Moderador construye dos estructuras iniciales: una que cumple la regla (ficha blanca) y otra que no (ficha negra).',
      'Los jugadores, por turnos, construyen nuevas estructuras y aprenden si cumplen la regla.',
      'Los jugadores pueden hacer conjeturas; las conjeturas oficiales requieren fichas de conjetura ganadas con predicciones correctas.',
      'Siempre se usan los dos clips, incluso en cartas con menos opciones, para no dar pistas.',
      'No se debe modificar ni adornar el texto de la carta.',
      'Las reglas no pueden referirse a nada fuera de la estructura, excepto la superficie para apoyo/orientación.',
      'Si hace falta, el Moderador puede mover estructuras o desmontarlas para liberar piezas.',
    ],
    outro: 'Gana el primer jugador cuya regla no pueda ser refutada por el Moderador.',
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
