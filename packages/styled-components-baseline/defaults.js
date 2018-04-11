'use strict';

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

var majorThird$1 = ratios.majorThird,
    perfectFourth$1 = ratios.perfectFourth,
    augFourth$1 = ratios.augFourth;
var defaults = {
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

module.exports = defaults;
