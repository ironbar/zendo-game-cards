export const pools = {
  colors: [
    { id: 'yellow', en: 'yellow', es: 'amarillo', className: 'color color-yellow', decorate: true, tokenType: 'color' },
    { id: 'blue', en: 'blue', es: 'azul', className: 'color color-blue', decorate: true, tokenType: 'color' },
    { id: 'red', en: 'red', es: 'rojo', className: 'color color-red', decorate: true, tokenType: 'color' },
  ],
  shapes: [
    { id: 'pyramid', en: 'pyramid', es: 'pirámide', className: 'shape shape-pyramid', decorate: true, tokenType: 'shape' },
    { id: 'block', en: 'block', es: 'bloque', className: 'shape shape-block', decorate: true, tokenType: 'shape' },
    { id: 'wedge', en: 'wedge', es: 'cuña', className: 'shape shape-wedge', decorate: true, tokenType: 'shape' },
  ],
  counts_1_2_atleast_1: [
    { id: 'exactly-1', en: 'exactly 1', es: 'exactamente 1' },
    { id: 'exactly-2', en: 'exactly 2', es: 'exactamente 2' },
    { id: 'at-least-1', en: 'at least 1', es: 'al menos 1' },
  ],
  counts_1_2_3_4: [
    { id: 'exactly-1', en: 'exactly 1', es: 'exactamente 1' },
    { id: 'exactly-2', en: 'exactly 2', es: 'exactamente 2' },
    { id: 'exactly-3', en: 'exactly 3', es: 'exactamente 3' },
    { id: 'exactly-4', en: 'exactly 4', es: 'exactamente 4' },
  ],
  counts_2_3: [
    { id: 'exactly-2', en: 'exactly 2', es: 'exactamente 2' },
    { id: 'exactly-3', en: 'exactly 3', es: 'exactamente 3' },
  ],
  counts_atleast_1_exactly_1_exactly_2: [
    { id: 'at-least-1', en: 'at least 1', es: 'al menos 1' },
    { id: 'exactly-1', en: 'exactly 1', es: 'exactamente 1' },
    { id: 'exactly-2', en: 'exactly 2', es: 'exactamente 2' },
  ],
  orientations_flat_vertical: [
    { id: 'flat', en: 'flat', es: 'horizontal', className: 'orientation', decorate: true },
    { id: 'vertical', en: 'vertical', es: 'vertical', className: 'orientation', decorate: true },
  ],
  orientations_doorstop_cheesecake: [
    { id: 'doorstop', en: 'doorstop', es: 'cuña de puerta', className: 'orientation', decorate: true },
    { id: 'cheesecake', en: 'cheesecake', es: 'trozo de tarta', className: 'orientation', decorate: true },
  ],
  orientations_upside_weird: [
    { id: 'upside-down', en: 'upside-down', es: 'boca abajo', className: 'orientation', decorate: true },
    { id: 'weird', en: 'weird', es: 'extraña', className: 'orientation', decorate: true },
  ],
  touching_status: [
    { id: 'touching', en: 'touching', es: 'tocando' },
    { id: 'not-touching', en: 'not touching', es: 'sin tocar' },
  ],
  zero_attributes: [
    { id: 'ungrounded', en: 'ungrounded', es: 'no apoyadas' },
    { id: 'weird', en: 'weird', es: 'extrañas' },
    { id: 'flat', en: 'flat', es: 'planas' },
    { id: 'vertical', en: 'vertical', es: 'verticales' },
  ],
  direction_relations: [
    { id: 'same', en: 'same', es: 'la misma dirección que' },
    { id: 'different', en: 'different', es: 'una dirección diferente a la de' },
    { id: 'opposite', en: 'opposite', es: 'la dirección opuesta a la de' },
  ],
  count_rules: [
    { id: 'odd', en: 'an odd number of', es: 'un número impar de' },
    { id: 'even', en: 'an even number of', es: 'un número par de' },
    { id: 'either-1-2', en: 'either 1 or 2', es: '1 o 2' },
  ],
};

export const difficultyLabels = {
  en: {
    easy: 'Easy',
    medium: 'Medium',
    difficult: 'Difficult',
  },
  es: {
    easy: 'Fácil',
    medium: 'Medio',
    difficult: 'Difícil',
  },
};
