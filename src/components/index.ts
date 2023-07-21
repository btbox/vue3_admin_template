import SvgIcon from './SvgIcon/index.vue'
// 引入 element-plus 提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponent: any = { SvgIcon }
export default {
    install(app: any) {
        Object.keys(allGlobalComponent).forEach((key: string) => {
            app.component(key, allGlobalComponent[key])
        })
        // 将 element-plus 提供的图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}
