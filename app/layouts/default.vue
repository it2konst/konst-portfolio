<script setup lang="ts">
import AppBgAnimation from "~/components/AppBgAnimation.vue";
</script>

<template>
    <!-- <AppBg /> -->
    <AppBgAnimation />
    <AppHeader />
    <main>
        <slot />
    </main>
</template>

<style lang="scss"></style>
