import libraryDefaults from './defaults';
import calculateIdealMeasure from './mixins/ideal-measure';
import calculateMeasure from './mixins/measure';
import calculateBreakpoint from './mixins/breakpoint';
import calculateRootSize from './mixins/root-size';
import calculateMaxWidth from './mixins/max-width';
import calculateResponsiveModularScales from './mixins/responsive-modular-scale';
import calculateFontSize from './mixins/font-size';
import setFont from './mixins/set-font';
import clearfix from './mixins/clearfix';
import calculateBassline from './mixins/baseline';
import calculateBasslineWithFontSize from './mixins/baseline-with-font-size';
import createBlockquote from './mixins/blockquote';

console.log('start');
export default ({ defaults: userDefaults = {} } = {}) => {
  const combinedDefaults = { ...libraryDefaults, ...userDefaults };
  const {
    breakpoints,
    bodyType,
    headingType,
    monospaceType,
    rootSizes,
    gutterWidths,
    maxWidths,
    measures,
    lineWidths,
    scales
  } = combinedDefaults;

  const fonts = {
    body: bodyType,
    heading: headingType,
    monospace: monospaceType
  };
  const modularScale = calculateResponsiveModularScales({ scales });
  const defaults = {
    ...combinedDefaults,
    clearfix,
    breakpoint: calculateBreakpoint({ breakpoints }),
    rootSize: calculateRootSize({ breakpoints, rootSizes }),
    maxWidth: calculateMaxWidth({ breakpoints, rootSizes, maxWidths }),
    measure: calculateMeasure({ breakpoints, rootSizes, measures }),
    idealMeasure: calculateIdealMeasure({
      breakpoints,
      rootSizes,
      maxWidths,
      measures,
      gutterWidths
    }),
    fontSize: calculateFontSize({ breakpoints, rootSizes, modularScale }),
    setFont: setFont({ fonts }),
    baseline: calculateBassline({
      fonts,
      breakpoints,
      rootSizes,
      modularScale
    }),
    baselineWithFontSize: calculateBasslineWithFontSize({
      fonts,
      breakpoints,
      rootSizes,
      modularScale
    }),
    blockquote: createBlockquote({
      fonts,
      breakpoints,
      rootSizes,
      modularScale
    })
  };

  // console.log(defaults);
  return defaults;
};
