<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo></Logo>
            <!--滚动组件-->
            <el-scrollbar class="scrollbar">
                <!--菜单组件-->
                <el-menu background-color="#001529" text-color="white">
                    <!--根据路由动态生成菜单-->
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar"></div>
        <!-- 内容展示区域 -->
        <div class="layout_main">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入左侧菜单的logo
import Logo from './logo/index.vue'
// 引入菜单组件
import Menu from './menu/index.vue'
// 右侧内容展示区域
import Main from './main/index.vue'

// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user.ts'
let userStore = useUserStore()
console.log(userStore.menuRoutes)
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background: red;
    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);
            .el-menu {
                border-right: none;
            }
        }
    }
    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        background: #535bf2;
        top: 0px;
        left: $base-menu-width;
    }
    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        background-color: yellow;
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
    }
}
</style>
