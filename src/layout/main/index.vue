<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <!--渲染 layout 一级路由的子路由-->
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}
.fade-enter-active {
    transition: all 1s;
}
.fade-enter-to {
    opacity: 1;
}
</style>
