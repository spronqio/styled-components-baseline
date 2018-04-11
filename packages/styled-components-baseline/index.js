'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

// Values
var minorSecond = 16 / 15;
var majorSecond = 1.125;
var minorThird = 1.2;
var majorThird = 1.25;
var perfectFourth = 4 / 3;
var augFourth = 1.414;
var perfectFifth = 1.5;
var minorSixth = 1.6;
var goldenSection = 1.61803398875;
var majorSixth = 5 / 3;
var minorSeventh = 16 / 9;
var majorSeventh = 1.875;
var octave = 2;
var majorTenth = 2.5;
var majorEleventh = 8 / 3;
var majorTwelfth = 3;
var doubleOctave = 4;
var ratios = {
  minorSecond: minorSecond,
  majorSecond: majorSecond,
  minorThird: minorThird,
  majorThird: majorThird,
  perfectFourth: perfectFourth,
  augFourth: augFourth,
  perfectFifth: perfectFifth,
  minorSixth: minorSixth,
  goldenSection: goldenSection,
  majorSixth: majorSixth,
  minorSeventh: minorSeventh,
  majorSeventh: majorSeventh,
  octave: octave,
  majorTenth: majorTenth,
  majorEleventh: majorEleventh,
  majorTwelfth: majorTwelfth,
  doubleOctave: doubleOctave
}; // Function settings

var modularScale = {
  base: 16,
  ratio: perfectFifth
}; // Function

var ms = function ms(v) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objectSpread({}, modularScale);
  // Parse settings
  // Write initial settings if undefined
  var base = settings.base,
      ratio = settings.ratio; // Initiate values
  // Fast calc if not multi stranded

  if (!Array.isArray(base) || base.length === 1) {
    return Math.pow(ratio, v) * base;
  } // Normalize bases
  // Find the upper bounds for base values


  var baseHigh = Math.pow(ratio, 1) * base[0];

  for (var i = 1; i < base.length; i++) {
    // shift up if value too low
    while (base[i] / 1 < base[0] / 1) {
      base[i] = Math.pow(ratio, 1) * base[i];
    } // Shift down if too high


    while (base[i] / 1 >= baseHigh / 1) {
      base[i] = Math.pow(ratio, -1) * base[i];
    }
  } // Sort bases


  base.sort(); // Figure out what base to use with modulo

  var rBase = Math.round((v / base.length - Math.floor(v / base.length)) * base.length); // Return

  return Math.pow(ratio, Math.floor(v / base.length)) * base[rBase];
};

var ALPHA = 'alpha';
var BETA = 'beta';
var GAMMA = 'gamma';
var DELTA = 'delta';
var EPSILON = 'epsilon';
var ZETA = 'zeta';
var ETA = 'eta';
var THETA = 'theta';
var IOTA = 'iota';
var sizes = [ALPHA, BETA, GAMMA, DELTA, EPSILON, ZETA, ETA, THETA, IOTA];

var createScale = function createScale(_ref) {
  var base = _ref.base,
      ratio = _ref.ratio;
  return sizes.reduce(function (scale, size, index) {
    return _objectSpread({}, scale, _defineProperty({}, size, Number(ms(sizes.length - index - 4, {
      base: base,
      ratio: ratio
    }).toFixed(1))));
  }, {});
};

var calculateResponsiveModularScales = (function (_ref2) {
  var _ref2$scales = _ref2.scales,
      scales = _ref2$scales === void 0 ? [] : _ref2$scales;
  return scales.map(function (scale) {
    return createScale(scale);
  }).reduce(function (modularScales, current, index) {
    return _objectSpread({}, modularScales, _defineProperty({}, "scale-".concat(index), current));
  }, {});
});

var majorThird$1 = ratios.majorThird,
    perfectFourth$1 = ratios.perfectFourth,
    augFourth$1 = ratios.augFourth;
var libraryDefaults = {
  breakpoints: {
    'break-0': 0,
    // 0px       Mobile first
    'break-1': 640,
    // 640px   ~ Small tablet up
    'break-2': 800,
    // 800px   ~ Large tablet up
    'break-3': 1024,
    // 1024px  ~ Desktop up
    'break-4': 1600 // 1600px  ~ Large desktop up

  },
  // Root font-sizes for each breakpoint. Set to half desired line-height of body text.
  // ! Make sure to have as many sizes as breakpoints above.
  rootSizes: {
    'rootsize-0': 12,
    // 24px line-height body text
    'rootsize-1': 14,
    // 28px line-height body text
    'rootsize-2': 15,
    // 30px line-height body text
    'rootsize-3': 17,
    // 34px line-height body text
    'rootsize-4': 19 // 38px line-height body text

  },
  // Set the optimum line-length for your text (based on typeface).
  // Aim for 75–100 characters a line when possible, at smaller sizes type size is more important.
  // ! Make sure to have as many widths as breakpoints above.
  // Note: this was 'maxwidths' in previous versions.
  measures: {
    'measure-0': 500,
    // 500px wide
    'measure-1': 550,
    // 550px wide
    'measure-2': 600,
    // 600px wide
    'measure-3': 680,
    // 680px wide
    'measure-4': 750 // 750px wide

  },
  // Set the max-widths for containers (based on design).
  // ! Make sure to have as many widths as breakpoints above.
  maxWidths: {
    'width-0': 500,
    // 500px wide
    'width-1': 600,
    // 600px wide
    'width-2': 800,
    // 800px wide
    'width-3': 1100,
    // 110px wide
    'width-4': 1300 // 1300px wide

  },
  // Gutter widths
  gutterWidths: {
    small: '1rem',
    medium: '2rem',
    large: '4rem'
  },
  // Add typefaces here.
  // Add weight and style details too.
  // ! Set cap height to set to the baseline.
  bodyType: {
    fontFamily: 'Georgia, serif',
    regular: 400,
    bold: 700,
    italic: true,
    capHeight: 0.66
  },
  headingType: {
    fontFamily: 'Helvetica, sans-serif',
    regular: 400,
    bold: 700,
    capHeight: 0.66
  },
  monospaceType: {
    fontFamily: 'Menlo, monospace',
    regular: 400,
    capHeight: 0.68
  },
  scales: [// Major Third http://www.modularscale.com/?16,28&px&1.25&web&text
  {
    base: [16, 28],
    ratio: majorThird$1
  }, // Major Third http://www.modularscale.com/?17,30&px&1.25&web&text
  {
    base: [17, 30],
    ratio: majorThird$1
  }, // Major Third http://www.modularscale.com/?18,32&px&1.25&web&text
  {
    base: [18, 32],
    ratio: majorThird$1
  }, // Perfect Fourth http://www.modularscale.com/?20,40&px&1.333&web&text
  {
    base: [20, 40],
    ratio: perfectFourth$1
  }, // Aug. Fourth http://www.modularscale.com/?22,50&px&1.414&web&text
  {
    base: [22, 50],
    ratio: augFourth$1
  }],
  // Here are some local fonts cap-height sizes to get you started:
  // Georgia: 0.66, Times / Times New Roman: 0.65, Palatino: 0.52
  // Lucida Grande: 0.72, Helvetica: 0.66, Verdana: 0.76, Tahoma: 0.76
  // Selection of Typekit fonts cap-height sizes:
  // Proxima Nova: 0.57, Museo Slab: 0.66, JAF Facit: 0.7, Brandon Grotesque: 0.65, Clavo: 0.7, Adelle: 0.66, FF Tisa Pro: 0.82, Jubilat: 0.66, Futura PT: 0.66, Chaparral Pro: 0.5, Minion Pro: 0.66, Myriad Pro: 0.66, Adobe Caslon Pro: 0.36
  // Text colours. British English.
  headingColour: '#2E2E2E',
  bodyColour: '#494949',
  linkColour: '#0E58F5',
  hoverColour: '#0B348B',
  captionColour: '#BDC8CC',
  white: '#FFFFFF',
  lightAccent: '#DDDAD4',
  darkAccent: '#515668',
  accent: '#BD8D46',
  callToAction: '#1481CE',
  // Background colours.
  backgroundColour: '#FCFCFC',
  codeBackgroundColour: '#F5F4F2'
};

var calculateIdealMeasure = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? {} : _ref$breakpoints,
      _ref$rootSizes = _ref.rootSizes,
      rootSizes = _ref$rootSizes === void 0 ? {} : _ref$rootSizes,
      _ref$maxWidths = _ref.maxWidths,
      maxWidths = _ref$maxWidths === void 0 ? {} : _ref$maxWidths,
      _ref$measures = _ref.measures,
      measures = _ref$measures === void 0 ? {} : _ref$measures,
      _ref$gutterWidths = _ref.gutterWidths,
      gutterWidths = _ref$gutterWidths === void 0 ? {} : _ref$gutterWidths;

  return function () {
    var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var gutterName = arguments.length > 1 ? arguments[1] : undefined;
    var main = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var output = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'max-width';

    if (typeof breakpoint === 'number' && breakpoint <= Object.values(breakpoints).length - 1 && breakpoint > 0) {
      var gutterValue = gutterWidths[gutterName];
      var gutter = gutterValue ? gutterValue * 2 : 0;
      var rootSize = rootSizes["root-size-".concat(breakpoint)];
      var idealMeasure = measures["measure-".concat(breakpoint)];
      var gutterSize = gutter * rootSize;
      var containerWidth = maxWidths["width-".concat(breakpoint)];
      var percentage = idealMeasure * gutterSize / containerWidth * 100;
      return "".concat(output, ": ").concat(main === false ? 100 - percentage : percentage, "%;");
    }
    /*
      @mixin ideal-measure($breakpoint: 0, $gutter: 0, $main: true, $output: max-width) {
    // Type of chosen variables.
    $break-value: type-of($breakpoint);
     // If specifying a breakpoint to use (and breakpoint exists and is larger than 0).
    @if $break-value == number and $breakpoint <= ($breakpoints-limit - 1) and $breakpoint > 0 {
       @if $gutter == small {
        $gutter: map-get($gutterwidths, small) * 2 / 1rem;
      } @else if $gutter == medium {
        $gutter: map-get($gutterwidths, medium) * 2 / 1rem;
      } @else if $gutter == large {
        $gutter: map-get($gutterwidths, large) * 2 / 1rem;
      } @else {
        $gutter: 0;
      }
       $rootsize: map-get($rootsizes, rootsize-#{$breakpoint});
      $ideal-measure: map-get($measures, measure-#{$breakpoint});
      $gutter-size: ($gutter * $rootsize);
      $container-width: map-get($maxwidths, width-#{$breakpoint});
       $percentage: percentage(($ideal-measure + $gutter-size) / $container-width);
       @if $percentage < 55 {
        $percentage: 55%;
      } @else if $percentage > 65 {
        $percentage: 65%;
      }
       @if $main == false {
        $percentage: 100 - $percentage;
      }
       #{$output}: $percentage;
    }
    }
    */

  };
});

var calculateMeasure = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? {} : _ref$breakpoints,
      _ref$rootSizes = _ref.rootSizes,
      rootSizes = _ref$rootSizes === void 0 ? {} : _ref$rootSizes,
      _ref$measures = _ref.measures,
      measures = _ref$measures === void 0 ? {} : _ref$measures;

  return function (breakpoint) {
    var breakpointValues = Object.values(breakpoints);
    var measureValues = Object.values(measures);
    var rootSizeValues = Object.values(rootSizes);

    if (typeof breakpoint === 'number' && breakpoint <= Object.keys(breakpoints).length - 1 && breakpoint >= 0) {
      return "max-width: ".concat(measureValues[breakpoint] / rootSizeValues[breakpoint], "rem;");
    } else if (typeof breakpoint === 'string' && breakpoint === 'all') {
      return "max-width: ".concat(measureValues[0] / rootSizeValues[0], "rem;\n      ").concat(breakpointValues.filter(function (breakpointValue) {
        return breakpointValue;
      }).map(function (breakpointValue, index) {
        return "@media screen and (min-width: ".concat(breakpointValue / 16, "em ) {\n          max-width: ").concat(measureValues[index + 1] / rootSizeValues[index + 1], "rem;\n        }");
      }).join('\n'), "\n      ");
    }

    return "@warn \"".concat(breakpoint, " is not valid to use as a breakpoint\";");
    /*
    
      @mixin measure($breakpoint: 0) {
      // Type of chosen variables.
      $break-value: type-of($breakpoint);
    
      // If specifying a breakpoint to use (and breakpoint exists).
      @if $break-value == number and $breakpoint <= ($breakpoints-limit - 1) and $breakpoint >= 0 {
    
        max-width: #{nth($line-widths, ($breakpoint + 1)) / nth($sizes, ($breakpoint + 1))}rem;
    
      } @else if $breakpoint == all {
        max-width: #{nth($line-widths, 1) / nth($sizes, 1)}rem;
    
        // Loop through breakpoints.
        @for $i from 2 through $breakpoints-limit {
          @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
            max-width: #{nth($line-widths, $i) / nth($sizes, $i)}rem;
          }
        }
      }
    }
    
    */
  };
});

// Breakpoints. Either set one to one of the breakpoint variables, or use a custom value for minor breakpoints.
// Defaults to min-width, but both min->max and max-width are available too.
// Parts based on https://gist.github.com/timknight/03e6335b8816aa534cf7
var calculateBreakpoint = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? {} : _ref$breakpoints;

  return function () {
    var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return function (content) {
      if (typeof breakpoint === 'string') {
        var breakpointValue = breakpoints[breakpoint];

        if (breakpointValue !== undefined) {
          return "@media screen and (min-width: ".concat(breakpointValue / 16, "em) { ").concat(content, " }");
        }

        return "@warn \"".concat(breakpoint, " is not a set breakpoint variable\";");
      } else if (typeof breakpoint === 'number') {
        var query = "\"all\" !default;";

        if (breakpoint !== 0 && max !== 0) {
          query = "\"(min-width: ".concat(breakpoint / 16, "em) and (max-width: ").concat(max / 16, "em)\";");
        } else if (breakpoint !== 0 && max === 0) {
          query = "(min-width: ".concat(breakpoint / 16, "em)");
        } else if (breakpoint === 0 && max !== 0) {
          query = "(min-width: ".concat(max / 16, "em)");
        }

        return "@media ".concat(query, " { ").concat(content, "; }");
      }

      return "@warn \"".concat(breakpoint, " is not valid to use as a breakpoint\";");
      /*
      // Type of break variable
      $value: type-of($break);
       // If it is a string (i.e. a breakpoint variable).
      @if $value == string {
        // If using 'break-1', 'break-2' etc output the correct breakpoints from map.
        @if map-has-key($breakpoints, $break) {
          @media screen and (min-width: #{map-get($breakpoints, $break) / 16 * 1em} ) { @content; }
        } @else {
          @warn "#{$break} is not a set breakpoint variable";
        }
       // If it is a number, use this for the breakpoint.
      } @else if $value == number {
        // If using other numbers output value in ems either for min, min & max or max width breakpoints.
        $query: "all" !default;
        @if      $break != 0 and $max != 0 { $query: "(min-width: #{$break / 16 * 1em}) and (max-width: #{$max / 16 * 1em})"; }
        @else if $break != 0 and $max == 0 { $query: "(min-width: #{$break / 16 * 1em})"; }
        @else if $break == 0 and $max != 0 { $query: "(max-width: #{$max / 16 * 1em})"; }
        @media #{$query} { @content; }
       } @else {
        @warn "#{$break} is not valid to use as a breakpoint";
      }
      */
    };
  };
});

var calculateRootSize = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? {} : _ref$breakpoints,
      _ref$rootSizes = _ref.rootSizes,
      rootSizes = _ref$rootSizes === void 0 ? {} : _ref$rootSizes;

  return "font-size: ".concat(Object.values(rootSizes)[0] / 16 * 100, "%;\n\n").concat(Object.values(breakpoints).filter(function (breakpointValue) {
    return breakpointValue;
  }).map(function (breakpointValue, index) {
    return "@media screen and (min-width: ".concat(breakpointValue / 16, "em ) {\n  font-size: ").concat(Object.values(rootSizes)[index + 1] / 16 * 100, "%;\n}");
  }).join('\n'), "\n\n");
});
/*
font-size: nth($sizes, 1) / 16 * 100%;

// Loop through breakpoints.
@for $i from 2 through $breakpoints-limit {
  @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
    font-size: nth($sizes, $i) / 16 * 100%;
  }
}

*/

// Max-widths for typeset containers, outputted in correct breakpoints.
var calculateMaxWidth = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? {} : _ref$breakpoints,
      _ref$rootSizes = _ref.rootSizes,
      rootSizes = _ref$rootSizes === void 0 ? {} : _ref$rootSizes,
      _ref$maxWidths = _ref.maxWidths,
      maxWidths = _ref$maxWidths === void 0 ? {} : _ref$maxWidths;

  return function (breakpoint) {
    var breakpointValues = Object.values(breakpoints);
    var maxWidthValues = Object.values(maxWidths);
    var rootSizeValues = Object.values(rootSizes);

    if (typeof breakpoint === 'number' && breakpoint <= Object.keys(breakpoints).length - 1 && breakpoint >= 0) {
      return "max-width: ".concat(maxWidthValues[breakpoint] / rootSizeValues[breakpoint], "rem;");
    } else if (typeof breakpoint === 'string' && breakpoint === 'all') {
      return "max-width: ".concat(maxWidthValues[0] / rootSizeValues[0], "rem;\n      ").concat(breakpointValues.filter(function (breakpointValue) {
        return breakpointValue;
      }).map(function (breakpointValue, index) {
        return "@media screen and (min-width: ".concat(breakpointValue / 16, "em ) {\n          max-width: ").concat(maxWidthValues[index + 1] / rootSizeValues[index + 1], "rem;\n        }\n        ");
      }).join('\n'), "\n      ");
    }

    return "@warn \"".concat(breakpoint, " is not valid to use as a breakpoint\";");
    /*
    @mixin maxwidth($breakpoint: 0) {
      // Type of chosen variables.
      $break-value: type-of($breakpoint);
    
      // If specifying a breakpoint to use (and breakpoint exists).
      @if $break-value == number and $breakpoint <= ($breakpoints-limit - 1) and $breakpoint >= 0 {
    
        max-width: #{nth($max-widths, ($breakpoint + 1)) / nth($sizes, ($breakpoint + 1))}rem;
    
      } @else if $breakpoint == all {
        max-width: #{nth($max-widths, 1) / nth($sizes, 1)}rem;
    
        // Loop through breakpoints.
        @for $i from 2 through $breakpoints-limit {
          @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
            max-width: #{nth($max-widths, $i) / nth($sizes, $i)}rem;
          }
        }
      }
    }
    */
  };
});

var calculateFontSize = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? {} : _ref$breakpoints,
      _ref$rootSizes = _ref.rootSizes,
      rootSizes = _ref$rootSizes === void 0 ? {} : _ref$rootSizes,
      _ref$modularScale = _ref.modularScale,
      modularScale = _ref$modularScale === void 0 ? {} : _ref$modularScale;

  return function (fontSize, breakpoint) {
    var breakpointValues = Object.values(breakpoints);
    var rootSizeValues = Object.values(rootSizes);
    var inScale = !!modularScale['scale-0'][fontSize];

    if (typeof breakpoint === 'number' && breakpoint <= Object.values(breakpoints).length - 1 && breakpoint >= 0) {
      if (typeof fontSize === 'number') {
        return "font-size: ".concat(fontSize / rootSizeValues[breakpoint], "rem;\n      ");
      } else if (inScale) {
        return "font-size: ".concat(modularScale["scale-".concat(breakpoint)][fontSize], "rem;\n      ");
      }

      return "@warn \"".concat(fontSize, " is not a valid scale variable\";\n      ");
    } else if (typeof breakpoint === 'string' && breakpoint === 'all') {
      if (typeof fontSize === 'number') {
        return "font-size: ".concat(fontSize / rootSizeValues[0], "rem;\n      \n      ").concat(breakpointValues.filter(function (breakpointValue) {
          return breakpointValue;
        }).map(function (breakpointValue, index) {
          return "@media screen and (min-width: ".concat(breakpointValues[index + 1] / 16, "em ) {\n          font-size: ").concat(rootSizeValues[index + 1], "rem;\n        }\n        ");
        }).join('\n'));
      } else if (inScale) {
        var scale = modularScale['scale-0'];
        var size = scale[fontSize];
        return "font-size: ".concat(size / rootSizeValues[0], "rem;\n").concat(breakpointValues.filter(function (breakpointValue) {
          return breakpointValue;
        }).map(function (breakpointValue, index) {
          return "@media screen and (min-width: ".concat(breakpointValues[index + 1] / 16, "em ) {\n  font-size: ").concat(modularScale["scale-".concat(index + 1)][fontSize] / rootSizeValues[index + 1], "rem;\n}\n");
        }).join('\n'), "\n      ");
      }

      return "@warn \"".concat(fontSize, " is not a valid scale variable\";");
    }

    return "@warn \"".concat(breakpoint, " is not valid to use as a breakpoint\";\n    ");
    /*
      @mixin fontsize($fontsize, $breakpoint: 0) {
    // Type of chosen variables.
    $font-value: type-of($fontsize);
    $break-value: type-of($breakpoint);
     // Check if value exists in scale.
    $in-scale: in-modular-scale(scale-0, $fontsize);
     // If specifying a breakpoint to use (and breakpoint exists).
    @if $break-value == number and $breakpoint <= ($breakpoints-limit - 1) and $breakpoint >= 0 {
       // If using a number for fontsize.
      @if $font-value == number {
        font-size: #{$fontsize / nth($sizes, ($breakpoint + 1))}rem;
       // If using a variable from the scale for fontsize.
      } @else if $in-scale == true {
        $get-scale: map-get($modular-scale, scale-#{$breakpoint});
        $get-size: map-get($get-scale, $fontsize);
         font-size: #{$get-size / nth($sizes, ($breakpoint + 1))}rem;
       } @else {
        @warn "#{$fontsize} is not a valid scale variable";
      }
     // If want to use value for all breakpoints.
    } @else if $breakpoint == all {
       // If using a number for fontsize.
      @if $font-value == number {
        font-size: #{$fontsize / nth($sizes, 1)}rem;
         // Loop through breakpoints.
        @for $i from 2 through $breakpoints-limit {
          @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
            font-size: #{$fontsize / nth($sizes, $i)}rem;
          }
        }
       // If using a variable from the scale for fontsize.
      } @else if $in-scale == true {
        $get-scale: map-get($modular-scale, scale-0);
        $get-size: map-get($get-scale, $fontsize);
        font-size: #{$get-size / nth($sizes, 1)}rem;
         // Loop through breakpoints.
        @for $i from 2 through $breakpoints-limit {
          $get-scale: map-get($modular-scale, scale-#{$i - 1});
          $get-size: map-get($get-scale, $fontsize);
           @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
            font-size: #{$get-size / nth($sizes, $i)}rem;
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
});

var setFont = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$fonts = _ref.fonts,
      fonts = _ref$fonts === void 0 ? {} : _ref$fonts;

  return function (_ref2) {
    var type = _ref2.type,
        style = _ref2.style,
        weight = _ref2.weight;
    var font = fonts[type];
    var fontFamily = font.fontFamily,
        regular = font.regular;
    return "font-family: ".concat(fontFamily, ";\nfont-style: ").concat(style || 'normal', ";\nfont-weight: ").concat(weight && font[weight] ? font[weight] : regular, ";\n");
  };
});

var clearfix = "&:before, &:after{\n      display: table;\n      content: \"\";\n    }\n    &:after{\n      clear: both;\n    }\n    \n  ";

var calculateBaselineShift = function calculateBaselineShift(size, lineHeight, rootSize, capHeight) {
  return size / 2 * (lineHeight * rootSize / size - capHeight) / rootSize + 0.00001;
};

var calculateBaselinePush = function calculateBaselinePush(size, lineHeight, rootSize, capHeight, below) {
  return below - (size / 2 * (lineHeight * rootSize / size - capHeight) / rootSize + 0.00001);
};

var calculateBassline = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$fonts = _ref.fonts,
      fonts = _ref$fonts === void 0 ? {} : _ref$fonts,
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? {} : _ref$breakpoints,
      _ref$rootSizes = _ref.rootSizes,
      rootSizes = _ref$rootSizes === void 0 ? {} : _ref$rootSizes,
      _ref$modularScale = _ref.modularScale,
      modularScale = _ref$modularScale === void 0 ? {} : _ref$modularScale;

  return function (fontSize, fontType) {
    var lineHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var below = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
    var breakpoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var font = fonts[fontType];

    if (!font) {
      return "@warn \"".concat(fontType, " is not a valid font type, only got ").concat(Object.keys(fonts), "\";");
    }

    var capHeight = font.capHeight;
    var inScale = !!modularScale['scale-0'][fontSize];
    var breakpointValues = Object.values(breakpoints);
    var rootSizeValues = Object.values(rootSizes);
    var lineHeightStatement = lineHeight ? "line-height: ".concat(lineHeight, "rem;") : "";

    if (typeof breakpoint === 'number' && breakpoint <= breakpointValues.length - 1 && breakpoint >= 0) {
      if (typeof fontSize === 'number') {
        var rootSize = rootSizeValues[breakpoint];
        var baselineShift = calculateBaselineShift(fontSize, lineHeight, rootSize, capHeight);
        var baselinePush = calculateBaselinePush(fontSize, lineHeight, rootSize, capHeight, below);
        return "".concat(lineHeightStatement, "\nmargin-bottom: ").concat(baselinePush, "rem;\npadding-top: ").concat(baselineShift, "rem;\n");
        /*
             $rootsize: nth($sizes, ($breakpoint + 1));
        $baseline-shift: #{($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001};
        $baseline-push: #{$below - (($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001)};
         margin-bottom: #{$baseline-push}rem;
        padding-top: #{$baseline-shift}rem;
         */
      } else if (inScale) {
        var scale = modularScale['scale-0'];
        var size = scale[fontSize];
        var _rootSize = rootSizeValues[breakpoint];

        var _baselineShift = calculateBaselineShift(size, lineHeight, _rootSize, capHeight);

        var _baselinePush = calculateBaselinePush(size, lineHeight, _rootSize, capHeight, below);

        return "".concat(lineHeightStatement, "\nmargin-bottom: ").concat(_baselinePush, "rem;\npadding-top: ").concat(_baselineShift, "rem;\n");
      }

      return "@warn \"".concat(fontSize, " is not a valid scale variable\";");
    } else if (typeof breakpoint === 'string' && breakpoint === 'all') {
      if (typeof fontSize === 'number') {
        var _rootSize2 = rootSizeValues[0];

        var _baselineShift2 = calculateBaselineShift(fontSize, lineHeight, _rootSize2, capHeight);

        var _baselinePush2 = calculateBaselinePush(fontSize, lineHeight, _rootSize2, capHeight, below);

        return "".concat(lineHeightStatement, "\nmargin-bottom: ").concat(_baselinePush2, "rem;\npadding-top: ").concat(_baselineShift2, "rem;\n").concat(breakpointValues.filter(function (breakpointValue) {
          return breakpointValue;
        }).map(function (breakpointValue, index) {
          var rootSize = rootSizeValues[index + 1];
          var baselineShift = calculateBaselineShift(fontSize, lineHeight, rootSize, capHeight);
          var baselinePush = calculateBaselinePush(fontSize, lineHeight, rootSize, capHeight, below);
          return "@media screen and (min-width: ".concat(breakpointValues[index + 1] / 16, "em ) {\n            margin-bottom: ").concat(baselinePush, "rem;\n            padding-top: ").concat(baselineShift, "rem;\n          }");
        }).join('\n'), "\n");
      } else if (inScale) {
        var _scale = modularScale['scale-0'];
        var _size = _scale[fontSize];
        var _rootSize3 = rootSizeValues[0];

        var _baselineShift3 = calculateBaselineShift(_size, lineHeight, _rootSize3, capHeight);

        var _baselinePush3 = calculateBaselinePush(_size, lineHeight, _rootSize3, capHeight, below);

        return "".concat(lineHeightStatement, "\nmargin-bottom: ").concat(_baselinePush3, "rem;\npadding-top: ").concat(_baselineShift3, "rem;\n").concat(breakpointValues.filter(function (breakpointValue) {
          return breakpointValue;
        }).map(function (breakpointValue, index) {
          var scale = modularScale["scale-".concat(index + 1)];
          var size = scale[fontSize];
          var rootSize = rootSizeValues[index + 1];
          var baselineShift = calculateBaselineShift(size, lineHeight, rootSize, capHeight);
          var baselinePush = calculateBaselinePush(size, lineHeight, rootSize, capHeight, below);
          return "@media screen and (min-width: ".concat(breakpointValues[index + 1] / 16, "em ) {\n          margin-bottom: ").concat(baselinePush, "rem;\n          padding-top: ").concat(baselineShift, "rem;\n        }");
        }).join('\n'), "\n");
      }

      return "@warn \"".concat(fontSize, " is not a valid scale variable\";");
    }

    return "@warn \"".concat(breakpoint, " is not valid to use as a breakpoint\";");
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
});

var calculateBaselineShift$1 = function calculateBaselineShift(size, lineHeight, rootSize, capHeight) {
  return size / 2 * (lineHeight * rootSize / size - capHeight) / rootSize + 0.00001;
};

var calculateBaselinePush$1 = function calculateBaselinePush(size, lineHeight, rootSize, capHeight, below) {
  return below - (size / 2 * (lineHeight * rootSize / size - capHeight) / rootSize + 0.00001);
};

var calculateBasslineWithFontSize = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$fonts = _ref.fonts,
      fonts = _ref$fonts === void 0 ? {} : _ref$fonts,
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? {} : _ref$breakpoints,
      _ref$rootSizes = _ref.rootSizes,
      rootSizes = _ref$rootSizes === void 0 ? {} : _ref$rootSizes,
      _ref$modularScale = _ref.modularScale,
      modularScale = _ref$modularScale === void 0 ? {} : _ref$modularScale;

  return function (fontSize, fontType) {
    var lineHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var below = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
    var breakpoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var font = fonts[fontType];

    if (!font) {
      return "@warn \"".concat(fontType, " is not a valid font type, only got ").concat(Object.keys(fonts), "\";");
    }

    var capHeight = font.capHeight;
    var inScale = !!modularScale['scale-0'][fontSize];
    var breakpointValues = Object.values(breakpoints);
    var rootSizeValues = Object.values(rootSizes);
    var lineHeightStatement = lineHeight ? "line-height: ".concat(lineHeight, "rem;") : "";

    if (typeof breakpoint === 'number' && breakpoint <= breakpointValues.length - 1 && breakpoint >= 0) {
      if (typeof fontSize === 'number') {
        var rootSize = rootSizeValues[breakpoint];
        var baselineShift = calculateBaselineShift$1(fontSize, lineHeight, rootSize, capHeight);
        var baselinePush = calculateBaselinePush$1(fontSize, lineHeight, rootSize, capHeight, below);
        return "".concat(lineHeightStatement, "\nfont-size: ").concat(fontSize / rootSizeValues[breakpoint], "rem;\nmargin-bottom: ").concat(baselinePush, "rem;\npadding-top: ").concat(baselineShift, "rem;\n");
        /*
             $rootsize: nth($sizes, ($breakpoint + 1));
        $baseline-shift: #{($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001};
        $baseline-push: #{$below - (($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001)};
         margin-bottom: #{$baseline-push}rem;
        padding-top: #{$baseline-shift}rem;
         */
      } else if (inScale) {
        var scale = modularScale['scale-0'];
        var size = scale[fontSize];
        var _rootSize = rootSizeValues[breakpoint];

        var _baselineShift = calculateBaselineShift$1(size, lineHeight, _rootSize, capHeight);

        var _baselinePush = calculateBaselinePush$1(size, lineHeight, _rootSize, capHeight, below);

        return "".concat(lineHeightStatement, "\nfont-size: ").concat(size / rootSizeValues[breakpoint], "rem;\nmargin-bottom: ").concat(_baselinePush, "rem;\npadding-top: ").concat(_baselineShift, "rem;\n");
      }

      return "@warn \"".concat(fontSize, " is not a valid scale variable\";");
    } else if (typeof breakpoint === 'string' && breakpoint === 'all') {
      if (typeof fontSize === 'number') {
        var _rootSize2 = rootSizeValues[0];

        var _baselineShift2 = calculateBaselineShift$1(fontSize, lineHeight, _rootSize2, capHeight);

        var _baselinePush2 = calculateBaselinePush$1(fontSize, lineHeight, _rootSize2, capHeight, below);

        return "".concat(lineHeightStatement, "\nfont-size: ").concat(fontSize / rootSizeValues[0], "rem;\nmargin-bottom: ").concat(_baselinePush2, "rem;\npadding-top: ").concat(_baselineShift2, "rem;\n").concat(breakpointValues.filter(function (breakpointValue) {
          return breakpointValue;
        }).map(function (breakpointValue, index) {
          var rootSize = rootSizeValues[index + 1];
          var baselineShift = calculateBaselineShift$1(fontSize, lineHeight, rootSize, capHeight);
          var baselinePush = calculateBaselinePush$1(fontSize, lineHeight, rootSize, capHeight, below);
          return "@media screen and (min-width: ".concat(breakpointValues[index + 1] / 16, "em ) {\n            font-size: ").concat(fontSize / rootSizeValues[index + 1], "rem;\n            margin-bottom: ").concat(baselinePush, "rem;\n            padding-top: ").concat(baselineShift, "rem;\n          }");
        }).join('\n'), "\n");
      } else if (inScale) {
        var _scale = modularScale['scale-0'];
        var _size = _scale[fontSize];
        var _rootSize3 = rootSizeValues[0];

        var _baselineShift3 = calculateBaselineShift$1(_size, lineHeight, _rootSize3, capHeight);

        var _baselinePush3 = calculateBaselinePush$1(_size, lineHeight, _rootSize3, capHeight, below);

        return "".concat(lineHeightStatement, "\nfont-size: ").concat(_size / rootSizeValues[0], "rem;\nmargin-bottom: ").concat(_baselinePush3, "rem;\npadding-top: ").concat(_baselineShift3, "rem;\n").concat(breakpointValues.filter(function (breakpointValue) {
          return breakpointValue;
        }).map(function (breakpointValue, index) {
          var scale = modularScale["scale-".concat(index + 1)];
          var size = scale[fontSize];
          var rootSize = rootSizeValues[index + 1];
          var baselineShift = calculateBaselineShift$1(size, lineHeight, rootSize, capHeight);
          var baselinePush = calculateBaselinePush$1(size, lineHeight, rootSize, capHeight, below);
          return "@media screen and (min-width: ".concat(breakpointValues[index + 1] / 16, "em ) {\n          font-size: ").concat(size / rootSizeValues[index + 1], "rem;\n          margin-bottom: ").concat(baselinePush, "rem;\n          padding-top: ").concat(baselineShift, "rem;\n        }");
        }).join('\n'), "\n");
      }

      return "@warn \"".concat(fontSize, " is not a valid scale variable\";");
    }

    return "@warn \"".concat(breakpoint, " is not valid to use as a breakpoint\";");
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
});

console.log('start');
var index = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$defaults = _ref.defaults,
      userDefaults = _ref$defaults === void 0 ? {} : _ref$defaults;

  var combinedDefaults = _objectSpread({}, libraryDefaults, userDefaults);

  var breakpoints = combinedDefaults.breakpoints,
      bodyType = combinedDefaults.bodyType,
      headingType = combinedDefaults.headingType,
      monospaceType = combinedDefaults.monospaceType,
      rootSizes = combinedDefaults.rootSizes,
      gutterWidths = combinedDefaults.gutterWidths,
      maxWidths = combinedDefaults.maxWidths,
      measures = combinedDefaults.measures,
      lineWidths = combinedDefaults.lineWidths,
      scales = combinedDefaults.scales;
  var fonts = {
    body: bodyType,
    heading: headingType,
    monospace: monospaceType
  };
  var modularScale = calculateResponsiveModularScales({
    scales: scales
  });

  var defaults = _objectSpread({}, combinedDefaults, {
    clearfix: clearfix,
    breakpoint: calculateBreakpoint({
      breakpoints: breakpoints
    }),
    rootSize: calculateRootSize({
      breakpoints: breakpoints,
      rootSizes: rootSizes
    }),
    maxWidth: calculateMaxWidth({
      breakpoints: breakpoints,
      rootSizes: rootSizes,
      maxWidths: maxWidths
    }),
    measure: calculateMeasure({
      breakpoints: breakpoints,
      rootSizes: rootSizes,
      measures: measures
    }),
    idealMeasure: calculateIdealMeasure({
      breakpoints: breakpoints,
      rootSizes: rootSizes,
      maxWidths: maxWidths,
      measures: measures,
      gutterWidths: gutterWidths
    }),
    fontSize: calculateFontSize({
      breakpoints: breakpoints,
      rootSizes: rootSizes,
      modularScale: modularScale
    }),
    setFont: setFont({
      fonts: fonts
    }),
    baseline: calculateBassline({
      fonts: fonts,
      breakpoints: breakpoints,
      rootSizes: rootSizes,
      modularScale: modularScale
    }),
    baselineWithFontSize: calculateBasslineWithFontSize({
      fonts: fonts,
      breakpoints: breakpoints,
      rootSizes: rootSizes,
      modularScale: modularScale
    })
  }); // console.log(defaults);


  return defaults;
});

module.exports = index;
