import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
export default defineConfig({
  plugins: [
    // createHtmlPlugin({
    //   minify: true,
    //   pages: [
    //     {
    //       entry: 'src/index.ts',
    //       filename: 'index.html',
    //       template: '/index.html',
    //     },

    //   ],
    // }),
  ],
  server: {
    host: true,
    port: 3333,
  },
  build: {
    lib: {
      entry: './src/index.ts', // 指定你的JS入口文件
      name: 'js-public-fn', // 打包后暴露的全局变量名
      fileName: (format: string) => `js-public-fn.${format}.js`, // 输出的文件名格式
    },
    rollupOptions: {
      // external: ['dependency'], // 如果你的库依赖了外部库，如'dependency'，需要在这里声明
    },
  },
});