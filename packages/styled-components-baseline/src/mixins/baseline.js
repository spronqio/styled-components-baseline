const calculateBaselineShift = (size, lineHeight, rootSize, capHeight) =>
  size / 2 * (lineHeight * rootSize / size - capHeight) / rootSize + 0.00001;

const calculateBaselinePush = (size, lineHeight, rootSize, capHeight, below) =>
  below -
  (size / 2 * (lineHeight * rootSize / size - capHeight) / rootSize + 0.00001);

export default ({
  fonts = {},
  breakpoints = {},
  rootSizes = {},
  modularScale = {}
} = {}) => (fontSize, fontType, lineHeight = 2, below = 2, breakpoint = 0) => {
  const font = fonts[fontType];
  if (!font) {
    return `@warn "${fontType} is not a valid font type, only got ${Object.keys(
      fonts
    )}";`;
  }

  const { capHeight } = font;
  const inScale = !!modularScale['scale-0'][fontSize];
  const breakpointValues = Object.values(breakpoints);
  const rootSizeValues = Object.values(rootSizes);

  const lineHeightStatement = lineHeight
    ? `line-height: ${lineHeight}rem;`
    : ``;

  if (
    typeof breakpoint === 'number' &&
    breakpoint <= breakpointValues.length - 1 &&
    breakpoint >= 0
  ) {
    if (typeof fontSize === 'number') {
      const rootSize = rootSizeValues[breakpoint];
      const baselineShift = calculateBaselineShift(
        fontSize,
        lineHeight,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(
        fontSize,
        lineHeight,
        rootSize,
        capHeight,
        below
      );

      return `${lineHeightStatement}
margin-bottom: ${baselinePush}rem;
padding-top: ${baselineShift}rem;
`;
      /*

          $rootsize: nth($sizes, ($breakpoint + 1));
      $baseline-shift: #{($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001};
      $baseline-push: #{$below - (($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001)};

      margin-bottom: #{$baseline-push}rem;
      padding-top: #{$baseline-shift}rem;

      */
    } else if (inScale) {
      const scale = modularScale['scale-0'];
      const size = scale[fontSize];

      const rootSize = rootSizeValues[breakpoint];
      const baselineShift = calculateBaselineShift(
        size,
        lineHeight,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(
        size,
        lineHeight,
        rootSize,
        capHeight,
        below
      );

      return `${lineHeightStatement}
margin-bottom: ${baselinePush}rem;
padding-top: ${baselineShift}rem;
`;
    }
    return `@warn "${fontSize} is not a valid scale variable";`;
  } else if (typeof breakpoint === 'string' && breakpoint === 'all') {
    if (typeof fontSize === 'number') {
      const rootSize = rootSizeValues[0];
      const baselineShift = calculateBaselineShift(
        fontSize,
        lineHeight,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(
        fontSize,
        lineHeight,
        rootSize,
        capHeight,
        below
      );
      return `${lineHeightStatement}
margin-bottom: ${baselinePush}rem;
padding-top: ${baselineShift}rem;
${breakpointValues
        .filter(breakpointValue => breakpointValue)
        .map((breakpointValue, index) => {
          const rootSize = rootSizeValues[index + 1];
          const baselineShift = calculateBaselineShift(
            fontSize,
            lineHeight,
            rootSize,
            capHeight
          );
          const baselinePush = calculateBaselinePush(
            fontSize,
            lineHeight,
            rootSize,
            capHeight,
            below
          );

          return `@media screen and (min-width: ${breakpointValues[index + 1] /
            16}em ) {
            margin-bottom: ${baselinePush}rem;
            padding-top: ${baselineShift}rem;
          }`;
        })
        .join('\n')}
`;
    } else if (inScale) {
      const scale = modularScale['scale-0'];
      const size = scale[fontSize];
      const rootSize = rootSizeValues[0];
      const baselineShift = calculateBaselineShift(
        size,
        lineHeight,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(
        size,
        lineHeight,
        rootSize,
        capHeight,
        below
      );

      return `${lineHeightStatement}
margin-bottom: ${baselinePush}rem;
padding-top: ${baselineShift}rem;
${breakpointValues
        .filter(breakpointValue => breakpointValue)
        .map((breakpointValue, index) => {
          const scale = modularScale[`scale-${index + 1}`];
          const size = scale[fontSize];
          const rootSize = rootSizeValues[index + 1];

          const baselineShift = calculateBaselineShift(
            size,
            lineHeight,
            rootSize,
            capHeight
          );
          const baselinePush = calculateBaselinePush(
            size,
            lineHeight,
            rootSize,
            capHeight,
            below
          );
          return `@media screen and (min-width: ${breakpointValues[index + 1] /
            16}em ) {
          margin-bottom: ${baselinePush}rem;
          padding-top: ${baselineShift}rem;
        }`;
        })
        .join('\n')}
`;
    }
    return `@warn "${fontSize} is not a valid scale variable";`;
  }
  return `@warn "${breakpoint} is not valid to use as a breakpoint";`;
};
