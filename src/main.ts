import { createApp } from 'vue'
import './style.css'

import App from '@/App.vue'
// 引入 element-plus 插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg 引入
import 'virtual:svg-icons-register'

// 全局组件引入
import globalComponent from '@/components/index'
// 引入模板全局样式
import '@/styles/index.scss'

// 获取应用实例对象
const app = createApp(App)
// 安装 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent)
// 将应用挂载到挂载点上
app.mount('#app')
