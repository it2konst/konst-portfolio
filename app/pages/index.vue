<script setup lang="ts">
import MainHero from "@/components/main/TheHero.vue";

useSeoMeta({
    title: "Konst Portfolio | Modern Web Development Projects",
    description:
        "Explore my portfolio showcasing modern web development projects built with Vue 3, Nuxt 3, TypeScript, and Tailwind CSS. Each project includes live demos and GitHub links.",
    // Open Graph (для Facebook, LinkedIn и других соцсетей)
    ogTitle: "Konst Portfolio | Modern Web Development Projects",
    ogDescription:
        "Explore my portfolio showcasing modern web development projects built with Vue 3, Nuxt 3, TypeScript, and Tailwind CSS.",
    ogImage: "https://konst-portfolio.vercel.app/images/opengraph.jpg",
    ogUrl: "https://konst-portfolio.vercel.app",
    // Twitter Card
    twitterTitle: "Konst Portfolio | Modern Web Development Projects",
    twitterDescription:
        "Explore my portfolio showcasing modern web development projects built with Vue 3, Nuxt 3, TypeScript, and Tailwind CSS.",
    twitterImage: "https://konst-portfolio.vercel.app/images/opengraph.jpg",
    twitterCard: "summary",
});
</script>

<template>
    <MainHero />
</template>

<style lang="scss">
// @use "~/assets/scss/helpers/index" as *;
// style page Home
</style>
