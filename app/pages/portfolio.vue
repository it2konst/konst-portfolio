<script setup lang="ts">
const menuActivePath = "/portfolio";
</script>

<template>
    <AppBg />
    <AppHeader :menu-active-path="menuActivePath" />
    <main class="container">
        <h1>Portfolio</h1>
        <AppCards />
    </main>
</template>

<style lang="scss"></style>
