import React from 'react';
import createBaseline from '@panacea/styled-components-baseline';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

const sb = createBaseline({
  defaults: {
    codeBackgroundColour: '#faf8f5'
    // bodyType: {
    //     fontFamily: 'Lato, sans-serif',
    //     regular: 400,
    //     bold: 700,
    //     italic: 'italic',
    //     capHeight: 0.66
    // },

    // headingType: {
    //     fontFamily: 'Lato, sans-serif',
    //     regular: 400,
    //     bold: 400,
    //     capHeight: 0.66
    // }
  }
});

injectGlobal`
    // @import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|Rubik");

    ${normalize()}
    * {
      box-sizing: border-box;
    }
    html {
      ${sb.rootSize}
    }
    body {
        ${sb.fontSize('zeta', 'all')}
        ${sb.setFont({ type: 'body' })}
        line-height: 2rem;
        background-image: linear-gradient(to bottom, cyan 0, rgba(255,255,255,0) 1px);
        background-repeat: repeat-y;
        background-size: 100% 1rem;
    }
`;
const reducer = (state = { foo: 100 }) => state;

export default ({ children, ...rest }) => (
  <ThemeProvider theme={{ sb }} {...rest}>
    {children && Array.isArray(children) ? <div>{children}</div> : children}
  </ThemeProvider>
);
