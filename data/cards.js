import { pools } from './options.js';

const txt = (value) => ({ type: 'text', value });
const choice = (key) => ({ type: 'choice', key });

export const cards = [
  {
    id: 1,
    difficulty: 'easy',
    choices: [],
    template: {
      en: [txt('A structure must contain all three colors.')],
      es: [txt('Una estructura debe contener los tres colores.')],
    },
  },
  {
    id: 2,
    difficulty: 'easy',
    choices: [],
    template: {
      en: [txt('A structure must contain all three shapes.')],
      es: [txt('Una estructura debe contener las tres formas.')],
    },
  },
  {
    id: 3,
    difficulty: 'easy',
    choices: [
      { key: 'count', pool: 'counts_1_2_atleast_1' },
      { key: 'color', pool: 'colors' },
    ],
    template: {
      en: [txt('A structure must contain '), choice('count'), txt(' '), choice('color'), txt(' piece(s).')],
      es: [txt('La cantidad de piezas de color '), choice('color'), txt(' debe ser '), choice('count'), txt('.')],
    },
  },
  {
    id: 4,
    difficulty: 'easy',
    choices: [
      { key: 'count', pool: 'counts_1_2_atleast_1' },
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain '), choice('count'), txt(' '), choice('shape'), txt(' piece(s).')],
      es: [txt('La cantidad de piezas de tipo '), choice('shape'), txt(' debe ser '), choice('count'), txt('.')],
    },
  },
  {
    id: 5,
    difficulty: 'easy',
    choices: [
      { key: 'color', pool: 'colors' },
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('color'), txt(' '), choice('shape'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shape'), txt(' de color '), choice('color'), txt('.')],
    },
  },
  {
    id: 6,
    difficulty: 'easy',
    choices: [
      { key: 'orientation', pool: 'orientations_flat_vertical' },
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('orientation'), txt(' '), choice('shape'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shape'), txt(' en orientación '), choice('orientation'), txt('.')],
    },
  },
  {
    id: 7,
    difficulty: 'easy',
    choices: [
      { key: 'orientation', pool: 'orientations_flat_vertical' },
      { key: 'color', pool: 'colors' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('orientation'), txt(' '), choice('color'), txt(' piece.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de color '), choice('color'), txt(' en orientación '), choice('orientation'), txt('.')],
    },
  },
  {
    id: 8,
    difficulty: 'easy',
    choices: [
      { key: 'orientation', pool: 'orientations_doorstop_cheesecake' },
    ],
    template: {
      en: [txt('A structure must contain at least one wedge in the '), choice('orientation'), txt(' orientation.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo cuña en orientación '), choice('orientation'), txt('.')],
    },
  },
  {
    id: 9,
    difficulty: 'easy',
    choices: [
      { key: 'count', pool: 'counts_1_2_3_4' },
    ],
    template: {
      en: [txt('A structure must contain '), choice('count'), txt(' total pieces.')],
      es: [txt('La cantidad total de piezas debe ser '), choice('count'), txt('.')],
    },
  },
  {
    id: 10,
    difficulty: 'medium',
    choices: [
      { key: 'colorA', pool: 'colors' },
      { key: 'colorB', pool: 'colors' },
    ],
    pairings: [
      { keys: ['colorA', 'colorB'], allowSame: true },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('colorA'), txt(' touching a '), choice('colorB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de color '), choice('colorA'), txt(' tocando 1 pieza de color '), choice('colorB'), txt('.')],
    },
  },
  {
    id: 11,
    difficulty: 'medium',
    choices: [
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain exclusively '), choice('shape'), txt('.')],
      es: [txt('Una estructura debe contener exclusivamente piezas de tipo '), choice('shape'), txt('.')],
    },
  },
  {
    id: 12,
    difficulty: 'medium',
    choices: [
      { key: 'color', pool: 'colors' },
    ],
    template: {
      en: [txt('A structure must contain exclusively '), choice('color'), txt(' piece(s).')],
      es: [txt('Una estructura debe contener exclusivamente piezas de color '), choice('color'), txt('.')],
    },
  },
  {
    id: 13,
    difficulty: 'medium',
    choices: [
      { key: 'orientation', pool: 'orientations_flat_vertical' },
    ],
    template: {
      en: [txt('A structure must contain exclusively '), choice('orientation'), txt(' piece(s).')],
      es: [txt('Una estructura debe contener exclusivamente piezas en orientación '), choice('orientation'), txt('.')],
    },
  },
  {
    id: 14,
    difficulty: 'medium',
    choices: [
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shape'), txt(' piece of any kind inside another piece.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shape'), txt(' dentro de otra pieza.')],
    },
  },
  {
    id: 15,
    difficulty: 'medium',
    choices: [
      { key: 'count', pool: 'counts_2_3' },
    ],
    template: {
      en: [txt('A structure must contain '), choice('count'), txt(' pieces of the same exact shape and color.')],
      es: [txt('Una estructura debe contener '), choice('count'), txt(' piezas de la misma forma y color exactos.')],
    },
  },
  {
    id: 16,
    difficulty: 'medium',
    choices: [
      { key: 'count', pool: 'counts_atleast_1_exactly_1_exactly_2' },
    ],
    template: {
      en: [txt('A structure must contain '), choice('count'), txt(' piece(s) pointing at another piece.')],
      es: [txt('La cantidad de piezas apuntando a otra pieza debe ser '), choice('count'), txt('.')],
    },
  },
  {
    id: 17,
    difficulty: 'medium',
    choices: [
      { key: 'orientation', pool: 'orientations_upside_weird' },
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('orientation'), txt(' '), choice('shape'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shape'), txt(' en orientación '), choice('orientation'), txt('.')],
    },
  },
  {
    id: 18,
    difficulty: 'medium',
    choices: [
      { key: 'shapeA', pool: 'shapes' },
      { key: 'shapeB', pool: 'shapes' },
    ],
    pairings: [
      { keys: ['shapeA', 'shapeB'], allowSame: true },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shapeA'), txt(' on top of a '), choice('shapeB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shapeA'), txt(' encima de 1 pieza de tipo '), choice('shapeB'), txt('.')],
    },
  },
  {
    id: 19,
    difficulty: 'medium',
    choices: [
      { key: 'count', pool: 'counts_1_2_atleast_1' },
    ],
    template: {
      en: [txt('A structure must contain '), choice('count'), txt(' ungrounded piece(s).')],
      es: [txt('La cantidad de piezas no apoyadas debe ser '), choice('count'), txt('.')],
    },
  },
  {
    id: 20,
    difficulty: 'medium',
    choices: [
      { key: 'touching', pool: 'touching_status' },
    ],
    template: {
      en: [txt('A structure must contain pieces that are all '), choice('touching'), txt(' another piece.')],
      es: [txt('Una estructura debe contener piezas que todas están '), choice('touching'), txt(' otra pieza.')],
    },
  },
  {
    id: 21,
    difficulty: 'medium',
    choices: [
      { key: 'colorA', pool: 'colors' },
      { key: 'colorB', pool: 'colors' },
    ],
    pairings: [
      { keys: ['colorA', 'colorB'], allowSame: false },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('colorA'), txt(' and at least one '), choice('colorB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de color '), choice('colorA'), txt(' y al menos 1 pieza de color '), choice('colorB'), txt('.')],
    },
  },
  {
    id: 22,
    difficulty: 'medium',
    choices: [
      { key: 'shapeA', pool: 'shapes' },
      { key: 'shapeB', pool: 'shapes' },
    ],
    pairings: [
      { keys: ['shapeA', 'shapeB'], allowSame: true },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shapeA'), txt(' pointing at a '), choice('shapeB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shapeA'), txt(' apuntando a 1 pieza de tipo '), choice('shapeB'), txt('.')],
    },
  },
  {
    id: 23,
    difficulty: 'medium',
    choices: [
      { key: 'shape', pool: 'shapes' },
      { key: 'color', pool: 'colors' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shape'), txt(' and at least one '), choice('color'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shape'), txt(' y al menos 1 pieza de color '), choice('color'), txt('.')],
    },
  },
  {
    id: 24,
    difficulty: 'medium',
    choices: [
      { key: 'orientation', pool: 'orientations_upside_weird' },
      { key: 'color', pool: 'colors' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('orientation'), txt(' '), choice('color'), txt(' piece.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de color '), choice('color'), txt(' en orientación '), choice('orientation'), txt('.')],
    },
  },
  {
    id: 25,
    difficulty: 'medium',
    choices: [
      { key: 'attribute', pool: 'zero_attributes' },
    ],
    template: {
      en: [txt('A structure must contain zero '), choice('attribute'), txt(' pieces.')],
      es: [txt('Una estructura debe contener cero piezas '), choice('attribute'), txt('.')],
    },
  },
  {
    id: 26,
    difficulty: 'medium',
    choices: [
      { key: 'color', pool: 'colors' },
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain zero '), choice('color'), txt(' '), choice('shape'), txt('.')],
      es: [txt('Una estructura debe contener cero piezas de tipo '), choice('shape'), txt(' de color '), choice('color'), txt('.')],
    },
  },
  {
    id: 27,
    difficulty: 'medium',
    choices: [
      { key: 'relation', pool: 'direction_relations' },
    ],
    template: {
      en: [txt('A structure must contain exactly two pieces, with each piece pointing in the '), choice('relation'), txt(' direction as the other piece.')],
      es: [txt('Una estructura debe contener exactamente dos piezas, cada una apuntando en '), choice('relation'), txt(' la otra pieza.')],
    },
  },
  {
    id: 28,
    difficulty: 'medium',
    choices: [
      { key: 'shapeA', pool: 'shapes' },
      { key: 'shapeB', pool: 'shapes' },
    ],
    pairings: [
      { keys: ['shapeA', 'shapeB'], allowSame: false },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shapeA'), txt(' and at least one '), choice('shapeB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shapeA'), txt(' y al menos 1 pieza de tipo '), choice('shapeB'), txt('.')],
    },
  },
  {
    id: 29,
    difficulty: 'medium',
    choices: [
      { key: 'colorA', pool: 'colors' },
      { key: 'colorB', pool: 'colors' },
    ],
    pairings: [
      { keys: ['colorA', 'colorB'], allowSame: true },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('colorA'), txt(' on top of a '), choice('colorB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de color '), choice('colorA'), txt(' encima de 1 pieza de color '), choice('colorB'), txt('.')],
    },
  },
  {
    id: 30,
    difficulty: 'medium',
    choices: [
      { key: 'colorA', pool: 'colors' },
      { key: 'colorB', pool: 'colors' },
    ],
    pairings: [
      { keys: ['colorA', 'colorB'], allowSame: true },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('colorA'), txt(' pointing at a '), choice('colorB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de color '), choice('colorA'), txt(' apuntando a 1 pieza de color '), choice('colorB'), txt('.')],
    },
  },
  {
    id: 31,
    difficulty: 'medium',
    choices: [
      { key: 'shapeA', pool: 'shapes' },
      { key: 'shapeB', pool: 'shapes' },
    ],
    pairings: [
      { keys: ['shapeA', 'shapeB'], allowSame: true },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shapeA'), txt(' touching a '), choice('shapeB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shapeA'), txt(' tocando a 1 pieza de tipo '), choice('shapeB'), txt('.')],
    },
  },
  {
    id: 32,
    difficulty: 'medium',
    choices: [
      { key: 'color', pool: 'colors' },
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain at least one ungrounded '), choice('color'), txt(' '), choice('shape'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shape'), txt(' no apoyada y de color '), choice('color'), txt('.')],
    },
  },
  {
    id: 33,
    difficulty: 'difficult',
    choices: [
      { key: 'shapeA', pool: 'shapes' },
      { key: 'shapeB', pool: 'shapes' },
    ],
    pairings: [
      { keys: ['shapeA', 'shapeB'], allowSame: false },
    ],
    template: {
      en: [txt('A structure must contain more '), choice('shapeA'), txt(' than '), choice('shapeB'), txt('.')],
      es: [txt('Una estructura debe contener más piezas de tipo '), choice('shapeA'), txt(' que piezas de tipo '), choice('shapeB'), txt('.')],
    },
  },
  {
    id: 34,
    difficulty: 'difficult',
    choices: [
      { key: 'countRule', pool: 'count_rules' },
    ],
    template: {
      en: [txt('A structure must contain '), choice('countRule'), txt(' total pieces.')],
      es: [txt('Una estructura debe contener '), choice('countRule'), txt(' piezas en total.')],
    },
  },
  {
    id: 35,
    difficulty: 'difficult',
    choices: [
      { key: 'colorA', pool: 'colors' },
      { key: 'colorB', pool: 'colors' },
    ],
    pairings: [
      { keys: ['colorA', 'colorB'], allowSame: false },
    ],
    template: {
      en: [txt('A structure must contain more '), choice('colorA'), txt(' than '), choice('colorB'), txt('.')],
      es: [txt('Una estructura debe contener más piezas de color '), choice('colorA'), txt(' que de color '), choice('colorB'), txt('.')],
    },
  },
  {
    id: 36,
    difficulty: 'difficult',
    choices: [
      { key: 'shape', pool: 'shapes' },
      { key: 'color', pool: 'colors' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shape'), txt(' OR at least one '), choice('color'), txt(' OR both.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shape'), txt(' O al menos 1 pieza de color '), choice('color'), txt(' O ambas.')],
    },
  },
  {
    id: 37,
    difficulty: 'difficult',
    choices: [
      { key: 'colorA', pool: 'colors' },
      { key: 'colorB', pool: 'colors' },
    ],
    pairings: [
      { keys: ['colorA', 'colorB'], allowSame: false },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('colorA'), txt(' with zero '), choice('colorB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de color '), choice('colorA'), txt(' con cero piezas de color '), choice('colorB'), txt('.')],
    },
  },
  {
    id: 38,
    difficulty: 'difficult',
    choices: [
      { key: 'shapeA', pool: 'shapes' },
      { key: 'shapeB', pool: 'shapes' },
    ],
    pairings: [
      { keys: ['shapeA', 'shapeB'], allowSame: false },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shapeA'), txt(' with zero '), choice('shapeB'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shapeA'), txt(' con cero piezas de tipo '), choice('shapeB'), txt('.')],
    },
  },
  {
    id: 39,
    difficulty: 'difficult',
    choices: [
      { key: 'shape', pool: 'shapes' },
      { key: 'color', pool: 'colors' },
    ],
    template: {
      en: [txt('A structure must contain at least one '), choice('shape'), txt(' on top of a '), choice('color'), txt('.')],
      es: [txt('Una estructura debe contener al menos 1 pieza de tipo '), choice('shape'), txt(' encima de 1 pieza de color '), choice('color'), txt('.')],
    },
  },
  {
    id: 40,
    difficulty: 'difficult',
    choices: [
      { key: 'color', pool: 'colors' },
      { key: 'shape', pool: 'shapes' },
    ],
    template: {
      en: [txt('A structure must contain more '), choice('color'), txt(' pieces than '), choice('shape'), txt('.')],
      es: [txt('Una estructura debe contener más piezas de color '), choice('color'), txt(' que piezas de tipo '), choice('shape'), txt('.')],
    },
  },
];

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const getPool = (poolName) => pools[poolName] || [];

const getOptionById = (poolName, optionId) => {
  const pool = getPool(poolName);
  return pool.find((option) => option.id === optionId);
};

const pickRandom = (items, rng) => items[Math.floor(rng() * items.length)];

export const resolveCard = (card, rng = Math.random) => {
  const choiceMap = new Map(card.choices.map((choice) => [choice.key, choice]));
  const selections = {};
  const resolved = new Set();

  if (card.pairings) {
    for (const pairing of card.pairings) {
      const [leftKey, rightKey] = pairing.keys;
      const leftChoice = choiceMap.get(leftKey);
      const rightChoice = choiceMap.get(rightKey);
      if (!leftChoice || !rightChoice) {
        continue;
      }

      const leftPool = getPool(leftChoice.pool);
      const rightPool = getPool(rightChoice.pool);

      if (!pairing.allowSame && leftChoice.pool === rightChoice.pool) {
        const leftOption = pickRandom(leftPool, rng);
        const filteredRightPool = rightPool.filter((option) => option.id !== leftOption.id);
        const rightOption = pickRandom(filteredRightPool.length ? filteredRightPool : rightPool, rng);
        selections[leftKey] = leftOption.id;
        selections[rightKey] = rightOption.id;
      } else {
        selections[leftKey] = pickRandom(leftPool, rng).id;
        selections[rightKey] = pickRandom(rightPool, rng).id;
      }

      resolved.add(leftKey);
      resolved.add(rightKey);
    }
  }

  for (const choice of card.choices) {
    if (resolved.has(choice.key)) {
      continue;
    }
    const pool = getPool(choice.pool);
    selections[choice.key] = pickRandom(pool, rng).id;
  }

  return {
    cardId: card.id,
    difficulty: card.difficulty,
    selections,
  };
};

export const createSignature = (cardId, selections) => {
  const keys = Object.keys(selections).sort();
  const payload = keys.map((key) => `${key}:${selections[key]}`).join('|');
  return `${cardId}|${payload}`;
};

export const countCardCombinations = (card) => {
  const choiceMap = new Map(card.choices.map((choice) => [choice.key, choice]));
  const handled = new Set();
  let total = 1;

  if (card.pairings) {
    for (const pairing of card.pairings) {
      const [leftKey, rightKey] = pairing.keys;
      const leftChoice = choiceMap.get(leftKey);
      const rightChoice = choiceMap.get(rightKey);
      if (!leftChoice || !rightChoice) {
        continue;
      }

      const leftPool = getPool(leftChoice.pool);
      const rightPool = getPool(rightChoice.pool);
      const leftCount = leftPool.length;
      const rightCount = rightPool.length;

      if (!pairing.allowSame && leftChoice.pool === rightChoice.pool) {
        total *= Math.max(leftCount * (leftCount - 1), 0);
      } else {
        total *= leftCount * rightCount;
      }

      handled.add(leftKey);
      handled.add(rightKey);
    }
  }

  for (const choice of card.choices) {
    if (handled.has(choice.key)) {
      continue;
    }
    const pool = getPool(choice.pool);
    total *= pool.length;
  }

  return total;
};

const renderChoice = (choiceDef, selectionId, lang) => {
  const option = getOptionById(choiceDef.pool, selectionId);
  if (!option) {
    return '';
  }

  const text = escapeHtml(option[lang] || option.en || '');
  if (!option.decorate) {
    return text;
  }

  const classNames = ['token'];
  if (option.className) {
    classNames.push(...option.className.split(' '));
  }

  if (option.tokenType === 'shape') {
    return `<span class="${classNames.join(' ')}"><span class="shape-icon shape-icon--${option.id}"></span>${text}</span>`;
  }

  if (option.tokenType === 'color') {
    return `<span class="${classNames.join(' ')}"><span class="color-dot color-dot--${option.id}"></span>${text}</span>`;
  }

  return `<span class="${classNames.join(' ')}">${text}</span>`;
};

export const renderRuleHtml = (card, selections, lang) => {
  const choiceMap = new Map(card.choices.map((choice) => [choice.key, choice]));
  const segments = card.template[lang] || card.template.en;

  return segments.map((segment) => {
    if (segment.type === 'text') {
      return escapeHtml(segment.value);
    }

    if (segment.type === 'choice') {
      const choiceDef = choiceMap.get(segment.key);
      if (!choiceDef) {
        return '';
      }
      return renderChoice(choiceDef, selections[segment.key], lang);
    }

    return '';
  }).join('');
};
