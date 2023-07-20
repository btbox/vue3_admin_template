<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider"></div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar"></div>
        <!-- 内容展示区域 -->
        <div class="layout_main">
            <p style="height: 800px">123</p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background: red;
    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
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
