// rollup.config.js
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/TimeRoller.js',
  output: {
    file: 'dist/time-roller.js',
    format: 'cjs',
    exports: 'named',
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
    }),
    resolve(),
    commonjs(),
  ],
  external: ['react', 'react-dom'],
};
