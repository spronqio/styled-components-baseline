export default ({ breakpoints = {}, rootSizes = {} } = {}) =>
  `font-size: ${Object.values(rootSizes)[0] / 16 * 100}%;

${Object.values(breakpoints)
    .filter(breakpointValue => breakpointValue)
    .map(
      (
        breakpointValue,
        index
      ) => `@media screen and (min-width: ${breakpointValue / 16}em ) {
  font-size: ${Object.values(rootSizes)[index + 1] / 16 * 100}%;
}`
    )
    .join('\n')}

`;
/*
font-size: nth($sizes, 1) / 16 * 100%;

// Loop through breakpoints.
@for $i from 2 through $breakpoints-limit {
  @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
    font-size: nth($sizes, $i) / 16 * 100%;
  }
}

*/
