// Values
const minorSecond = 16 / 15;
const majorSecond = 1.125;
const minorThird = 1.2;
const majorThird = 1.25;
const perfectFourth = 4 / 3;
const augFourth = 1.414;
const perfectFifth = 1.5;
const minorSixth = 1.6;
const goldenSection = 1.61803398875;
const majorSixth = 5 / 3;
const minorSeventh = 16 / 9;
const majorSeventh = 1.875;
const octave = 2;
const majorTenth = 2.5;
const majorEleventh = 8 / 3;
const majorTwelfth = 3;
const doubleOctave = 4;

export const ratios = {
  minorSecond,
  majorSecond,
  minorThird,
  majorThird,
  perfectFourth,
  augFourth,
  perfectFifth,
  minorSixth,
  goldenSection,
  majorSixth,
  minorSeventh,
  majorSeventh,
  octave,
  majorTenth,
  majorEleventh,
  majorTwelfth,
  doubleOctave
};
// Function settings
const modularScale = {
  base: 16,
  ratio: perfectFifth
};

// Function
const ms = (v, settings = { ...modularScale }) => {
  // Parse settings
  // Write initial settings if undefined
  const { base, ratio } = settings;
  // Initiate values
  // Fast calc if not multi stranded
  if (!Array.isArray(base) || base.length === 1) {
    return Math.pow(ratio, v) * base;
  }

  // Normalize bases
  // Find the upper bounds for base values
  const baseHigh = Math.pow(ratio, 1) * base[0];
  for (let i = 1; i < base.length; i++) {
    // shift up if value too low
    while (base[i] / 1 < base[0] / 1) {
      base[i] = Math.pow(ratio, 1) * base[i];
    }
    // Shift down if too high
    while (base[i] / 1 >= baseHigh / 1) {
      base[i] = Math.pow(ratio, -1) * base[i];
    }
  }
  // Sort bases
  base.sort();

  // Figure out what base to use with modulo
  const rBase = Math.round(
    (v / base.length - Math.floor(v / base.length)) * base.length
  );

  // Return
  return Math.pow(ratio, Math.floor(v / base.length)) * base[rBase];
};

export const ALPHA = 'alpha';
export const BETA = 'beta';
export const GAMMA = 'gamma';
export const DELTA = 'delta';
export const EPSILON = 'epsilon';
export const ZETA = 'zeta';
export const ETA = 'eta';
export const THETA = 'theta';
export const IOTA = 'iota';

export const sizes = [
  ALPHA,
  BETA,
  GAMMA,
  DELTA,
  EPSILON,
  ZETA,
  ETA,
  THETA,
  IOTA
];

const createScale = ({ base, ratio }) =>
  sizes.reduce(
    (scale, size, index) => ({
      ...scale,
      [size]: Number(
        ms(sizes.length - index - 4, {
          base,
          ratio
        }).toFixed(1)
      )
    }),
    {}
  );

export default ({ scales = [] }) =>
  scales.map(scale => createScale(scale)).reduce(
    (modularScales, current, index) => ({
      ...modularScales,
      [`scale-${index}`]: current
    }),
    {}
  );
