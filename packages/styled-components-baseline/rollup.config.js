import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const external = [
  'react',
  'redux',
  'react-redux',
  'react-router-dom',
  'react-loadable',
  'lodash.has',
  'lodash.set',
  '@hocs/with-lifecycle'
];
const babelPlugin = babel({
  exclude: 'node_modules/**'
});
const resolvePlugin = resolve({
  jsnext: true,
  browser: true,
  extensions: ['.js', '.json'],
  modulesOnly: true
});
export default [
  {
    input: 'src/index.js',
    external,
    plugins: [resolvePlugin, babelPlugin],
    output: [
      { file: 'index.js', format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
  {
    input: 'src/defaults.js',
    external,
    plugins: [resolvePlugin, babelPlugin],
    output: [
      { file: 'defaults.js', format: 'cjs' },
      { file: 'defaults.esm.js', format: 'es' }
    ]
  },
  {
    input: 'src/Layouts/index.js',
    external,
    plugins: [resolvePlugin, babelPlugin],
    output: [
      { file: 'Layouts/index.js', format: 'cjs' },
      { file: 'Layouts/index.esm.js', format: 'es' }
    ]
  },
  {
    input: 'src/Typography/index.js',
    external,
    plugins: [resolvePlugin, babelPlugin],
    output: [
      { file: 'Typography/index.js', format: 'cjs' },
      { file: 'Typography/index.esm.js', format: 'es' }
    ]
  }
  // {
  //   input: 'src/hoc/index.js',
  //   external,
  //   plugins: [resolvePlugin, babelPlugin],
  //   output: [
  //     { file: 'hoc/index.js', format: 'cjs' },
  //     { file: 'hoc/index.esm.js', format: 'es' }
  //   ]
  // }
];
