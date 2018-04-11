// next.config.js
module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/styled-components-baseline/' : '',
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' }
      }
    }
  }

  // git subtree push --prefix packages/styled-components-baseline-examples/out  origin gh-pages