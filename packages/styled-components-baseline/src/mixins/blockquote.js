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
} = {}) => {
  console.log(123);
  return {
    styles: {},
    paragraph: {}
  };
};
