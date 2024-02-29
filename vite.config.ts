import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/my-publicFn',
          filename: 'index.html',
          template: '/index.html',
          // injectOptions: {
          //   data: {
          //     title: 'index',
          //     injectScript: `<script src="./inject.js"></script>`,
          //   },
          // },
        },

      ],
    }),
  ],
  server: {
    host: true,
    port: 3333,
  },
  build: {
    lib: {
      entry: './src/my-publicFn.ts', // 指定你的JS入口文件
      name: 'my-publicFn', // 打包后暴露的全局变量名
      fileName: (format: string) => `my-publicFn.${format}.js`, // 输出的文件名格式
    },
    rollupOptions: {
      // external: ['dependency'], // 如果你的库依赖了外部库，如'dependency'，需要在这里声明
    },
  },
});