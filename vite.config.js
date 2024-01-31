import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/myLibrary.js', // 指定你的JS入口文件
      name: 'MyLibrary', // 打包后暴露的全局变量名
      fileName: (format) => `my-library.${format}.js`, // 输出的文件名格式
    },
    rollupOptions: {
     // external: ['dependency'], // 如果你的库依赖了外部库，如'dependency'，需要在这里声明
    },
  },
});