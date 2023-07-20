// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginForm } from '@/api/user/type.ts'

// 创建用户小仓库
let useUserStore = defineStore('User', {
  // 小仓库存储数据地方
  state: () => {
    return {
      token: '', // 用户唯一标识 token
    }
  },
  // 异步|逻辑的地方
  actions: {
    async userLogin(data: loginForm) {
      // 登录请求
      let result: any = await reqLogin(data)
      if (result.code == 200) {
        // 存储 token
        this.token = result.data.token
        // 本地存储
        localStorage.setItem('TOKEN', result.data.token)
        // 能保证当前 async 函数返回一个成功的 promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    }
  },
  getters: {

  }
})

// 对外暴露获取小仓库方法
export default useUserStore