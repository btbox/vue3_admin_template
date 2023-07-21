// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/type.ts'
import type { UserState } from './types/types.ts'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 引入路由(常量路由)
import { constantRoute } from '@/router/routes.ts'
// 创建用户小仓库
const useUserStore = defineStore('User', {
    // 小仓库存储数据地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(), // 用户唯一标识 token
            menuRoutes: constantRoute
        }
    },
    // 异步|逻辑的地方
    actions: {
        async userLogin(data: loginForm) {
            // 登录请求
            const result: loginResponseData = await reqLogin(data)
            if (result.code == 200) {
                // 存储 token
                this.token = result.data.token as string
                // 本地存储
                SET_TOKEN(result.data.token as string)
                // 能保证当前 async 函数返回一个成功的 promise
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {}
})

// 对外暴露获取小仓库方法
export default useUserStore
