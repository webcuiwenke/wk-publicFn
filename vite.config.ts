import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/main.ts',
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
  build: {
    lib: {
      entry: './src/myLibrary.js', // 指定你的JS入口文件
      name: 'MyLibrary', // 打包后暴露的全局变量名
      fileName: (format: string) => `my-library.${format}.js`, // 输出的文件名格式
    },
    rollupOptions: {
      // external: ['dependency'], // 如果你的库依赖了外部库，如'dependency'，需要在这里声明
    },
  },
});