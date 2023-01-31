import autoprefixer from 'autoprefixer';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import 'vite/modulepreload-polyfill';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    manifest: true, // generate manifest.json in outDir
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nested: resolve(__dirname, 'src/nested/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'node_modules/'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      // helpers: {
      //     capitalize: (value) => value.toUpperCase(),
      // },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  }
}
