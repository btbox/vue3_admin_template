<template>
    <div>
        <template v-for="(item, index) in menuList" :key="item.path">
            <!--没有子路由-->
            <template v-if="!item.children">
                <el-menu-item
                    v-if="!item.meta.hidden"
                    :index="item.path"
                    @click="goRoute"
                >
                    <template #title>
                        <el-icon>
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <span>{{ item.meta.title }}</span>
                    </template>
                </el-menu-item>
            </template>
            <!--有子路由但是只有一个子路由-->
            <template v-if="item.children && item.children.length == 1">
                <el-menu-item
                    :index="item.children[0].path"
                    v-if="!item.children[0].meta.hidden"
                    @click="goRoute"
                >
                    <template #title>
                        <el-icon>
                            <component
                                :is="item.children[0].meta.icon"
                            ></component>
                        </el-icon>
                        <span>{{ item.children[0].meta.title }}</span>
                    </template>
                </el-menu-item>
            </template>
            <!--有子路由且个数大于一个-->
            <el-sub-menu
                :index="item.path"
                v-if="item.children && item.children.length > 1"
            >
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <Menus :menuList="item.children"></Menus>
            </el-sub-menu>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
let $router = useRouter()
// 获取父组件传递过来的全部路由数据
defineProps(['menuList'])
// 点击菜单的回调
const goRoute = (vc: any) => {
    // 路由跳转
    $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
    name: 'Menus'
}
</script>

<style scoped></style>
