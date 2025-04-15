import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/glitch-effect.js',
  output: {
    file: 'dist/glitch-effect.min.js',
    format: 'umd',
    name: 'GlitchEffect', // глобальная переменная, если подключать через <script>
  },
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};
