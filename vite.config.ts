import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    solid(),
    babel({
      babelConfig: {
        presets: ['solid'],
      },
    }),
  ],
});
