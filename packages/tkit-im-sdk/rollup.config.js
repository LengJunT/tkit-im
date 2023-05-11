import reslove from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel';
import rollupTypescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs';

const extensions = ['.js', '.ts']

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'TKImSDK'
  },
  plugins: [
    commonjs(),
    reslove({
      moduleDirectories: ['node_modules'],
      extensions
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions
    }),
    rollupTypescript(),
  ],
  // external: ['lodash']
}
