export default ({ fonts = {} } = {}) => ({ type, style, weight }) => {
  const font = fonts[type];
  const { fontFamily, regular } = font;
  return `font-family: ${fontFamily};
font-style: ${style || 'normal'};
font-weight: ${weight && font[weight] ? font[weight] : regular};
`;
};
