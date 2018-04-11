import React from 'react';
import createBaseline from '@panacea/styled-components-baseline';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

const sb = createBaseline({
    defaults: {
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
    }
`;
const reducer = (state = { foo: 100 }) => state;

export default ({ children, ...rest }) => <ThemeProvider theme={{ sb }} {...rest} >{children && Array.isArray(children) ? <div>{children}</div> : children}</ThemeProvider>

