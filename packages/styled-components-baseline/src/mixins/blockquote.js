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
  // const breakpointValues = Object.values(breakpoints);
  const rootSizeValues = Object.values(rootSizes);
  const rootSize = rootSizeValues[0];
  const { capHeight } = fonts.body;
  const baselineShift = calculateBaselineShift(size, 2, rootSize, capHeight);
  const baselinePush = calculateBaselinePush(size, rootSize, capHeight, 3);
  console.log(scale, size, rootSizes, baselineShift, baselinePush);
  /*

    $get-scale: map-get($modular-scale, scale-0);
      $get-size: map-get($get-scale, zeta);
      $rootsize: nth($sizes, 1);
      $baseline-shift: #{($get-size / 2 * ((2 * $rootsize / $get-size) - map-get($bodytype, cap-height))) / $rootsize + 0.00001};
      $baseline-push: #{$below - (($get-size * ((2 * $rootsize / $get-size) - map-get($bodytype, cap-height))) / $rootsize + 0.00001)};
      $baseline-push: #{$below - (($get-size / 2 * (($lineheight * $rootsize / $get-size) - $cap-height)) / $rootsize + 0.00001)};

      margin-bottom: #{$baseline-push}rem;

      */

  return {
    styles: {},
    paragraph: `border-left: 0.15rem solid ${linkColour};
font-style: italic;
padding-left: 1rem;
margin-bottom: ${baselinePush}rem;
padding-bottom: ${baselineShift}rem;
`
  };
};
