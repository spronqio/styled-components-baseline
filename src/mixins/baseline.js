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

  /*

    // Advanced baseline magic.
// ! Read the README to help understand what is going on here.
// Parts based on https://gist.github.com/razwan/10662500
@mixin baseline($fontsize, $font, $lineheight: 2, $below: 2, $breakpoint: 0) {
  // Type of chosen variables.
  $font-value: type-of($fontsize);
  $break-value: type-of($breakpoint);

  // Cap height
  $cap-height: map-get($font, cap-height);

  // Check if value exists in scale.
  $in-scale: in-modular-scale(scale-0, $fontsize);

  // Set the line-height (if it isn’t set at 0).
  @if $lineheight != 0 {
    line-height: #{$lineheight}rem;
  }

  // If specifying a breakpoint to use (and breakpoint exists).
  @if $break-value == number and $breakpoint <= ($breakpoints-limit - 1) and $breakpoint >= 0 {

    // If using a number for fontsize.
    @if $font-value == number {
      $rootsize: nth($sizes, ($breakpoint + 1));
      $baseline-shift: #{($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001};
      $baseline-push: #{$below - (($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001)};

      margin-bottom: #{$baseline-push}rem;
      padding-top: #{$baseline-shift}rem;

    // If using a variable from the scale for fontsize.
    } @else if $in-scale == true {
      $get-scale: map-get($modular-scale, scale-#{$breakpoint});
      $get-size: map-get($get-scale, $fontsize);
      $rootsize: nth($sizes, ($breakpoint + 1));

      $baseline-shift: #{($get-size / 2 * (($lineheight * $rootsize / $get-size) - $cap-height)) / $rootsize + 0.00001};
      $baseline-push: #{$below - (($get-size / 2 * (($lineheight * $rootsize / $get-size) - $cap-height)) / $rootsize + 0.00001)};

      margin-bottom: #{$baseline-push}rem;
      padding-top: #{$baseline-shift}rem;

    } @else {
      @warn "#{$fontsize} is not a valid scale variable";
    }

  // If want to use value for all breakpoints.
  } @else if $breakpoint == all {

    // If using a number for fontsize.
    @if $font-value == number {
      $rootsize: nth($sizes, 1);
      $baseline-shift: #{($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001};
      $baseline-push: #{$below - (($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001)};

      margin-bottom: #{$baseline-push}rem;
      padding-top: #{$baseline-shift}rem;

      // Loop through breakpoints.
      @for $i from 2 through $breakpoints-limit {
        $rootsize: nth($sizes, $i);
        $baseline-shift: #{($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001};
        $baseline-push: #{$below - (($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001)};

        @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
          margin-bottom: #{$baseline-push}rem;
          padding-top: #{$baseline-shift}rem;
        }
      }

    // If using a variable from the scale for fontsize.
    } @else if $in-scale == true {
      $get-scale: map-get($modular-scale, scale-0);
      $get-size: map-get($get-scale, $fontsize);
      $rootsize: nth($sizes, 1);

      $baseline-shift: #{($get-size / 2 * (($lineheight * $rootsize / $get-size) - $cap-height)) / $rootsize + 0.00001};
      $baseline-push: #{$below - (($get-size / 2 * (($lineheight * $rootsize / $get-size) - $cap-height)) / $rootsize + 0.00001)};

      margin-bottom: #{$baseline-push}rem;
      padding-top: #{$baseline-shift}rem;

      // Loop through breakpoints.
      @for $i from 2 through $breakpoints-limit {
        $get-scale: map-get($modular-scale, scale-#{$i - 1});
        $get-size: map-get($get-scale, $fontsize);
        $rootsize: nth($sizes, $i);

        $baseline-shift: #{($get-size / 2 * (($lineheight * $rootsize / $get-size) - $cap-height)) / $rootsize + 0.00001};
        $baseline-push: #{$below - (($get-size / 2 * (($lineheight * $rootsize / $get-size) - $cap-height)) / $rootsize + 0.00001)};

        @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
          margin-bottom: #{$baseline-push}rem;
          padding-top: #{$baseline-shift}rem;
        }
      }

    } @else {
      @warn "#{$fontsize} is not a valid scale variable";
    }

  } @else {
    @warn "#{$breakpoint} is not valid to use as a breakpoint";
  }
}

*/
};
