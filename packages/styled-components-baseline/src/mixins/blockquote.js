const calculateBaselineShift = (size, lineHeight, rootSize, capHeight) =>
  size / 2 * (lineHeight * rootSize / size - capHeight) / rootSize + 0.00001;

const calculateBaselinePush = (size, rootSize, capHeight, below) =>
  below - size * (2 * rootSize / size - capHeight) / rootSize + 0.00001;

export default ({
  linkColour,
  fonts = {},
  breakpoints = {},
  rootSizes = {},
  modularScale = {}
} = {}) => {
  const scale = modularScale['scale-0'];
  const size = scale.zeta;
  const breakpointValues = Object.values(breakpoints);
  const rootSizeValues = Object.values(rootSizes);
  const rootSize = rootSizeValues[0];
  const { capHeight } = fonts.body;
  const baselineShift = calculateBaselineShift(size, 2, rootSize, capHeight);
  const baselinePush = calculateBaselinePush(size, rootSize, capHeight, 3);

  return {
    styles: {},
    paragraph: `border-left: 0.15rem solid ${linkColour};
font-style: italic;
padding-left: 1rem;
margin-bottom: ${baselinePush}rem;
padding-bottom: ${baselineShift}rem;
${breakpointValues
      .filter(breakpointValue => breakpointValue)
      .map((breakpointValue, index) => {
        const scale = modularScale[`scale-${index + 1}`];
        const size = scale.zeta;
        const rootSize = rootSizeValues[index + 1];

        const baselineShift = calculateBaselineShift(
          size,
          2,
          rootSize,
          capHeight
        );
        const baselinePush = calculateBaselinePush(
          size,
          rootSize,
          capHeight,
          3
        );
        return `@media screen and (min-width: ${breakpointValues[index + 1] /
          16}em ) {
      margin-bottom: ${baselinePush}rem;
      padding-bottom: ${baselineShift}rem;
    }`;
      })
      .join('\n')}
`
  };
};
