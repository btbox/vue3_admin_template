import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入 svg 需要用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// mock 插件提供方法
// @ts-ignore
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
})
