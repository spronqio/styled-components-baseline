// next.config.js
module.exports = {
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/styled-components-baseline/' : '',
  exportPathMap(defaultPathMap) {
    return {
      '/': { page: '/' }
    };
  }
  // webpack: {
  //   resolve: {
  //     alias: {
  //       'styled-components': require.resolve('styled-components')
  //     }
  //   }
  // }
};
