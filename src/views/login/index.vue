<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_from" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time.ts'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user.ts'
let useStore = useUserStore()
// 获取 el-from 表单
let loginForms = ref()
// 获取路由器
let $router = useRouter()
// 定义变量控制登录加载
let loading = ref(false)
// 收集账户与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
// 登录按钮回调
const login = async () => {
  // 保证全部表单校验通过再发请求
  await loginForms.value.validate()

  loading.value = true
  try {
    // 保证登录成功
    await useStore.userLogin(loginForm)
    // 编程式导航
    $router.push('/')
    // 登录成功提示信息
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `HI, ${getTime}好`
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    // 登录失败提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  }
}

// 自定义校验规则函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  // rule: 校验规则对象
  // value: 表单元素文本内容
  // callback: 如果符合条件 callBack 方形通过
  if (/^\d{5,10}$/.test(value)) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

// 定义表单校验需要配置对象
const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUserName
    }
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword
    }
  ]
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_from {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
