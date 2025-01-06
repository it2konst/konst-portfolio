<script setup lang="ts"></script>

<template>
    <section class="portfolio container">
        <h1 class="app__title-3d opacity-0" v-animate="{ animation: 'animate__flipInX' }">Portfolio</h1>
        <AppCards />
    </section>
</template>

<style lang="scss">
// @use "~/assets/scss/helpers/index" as *;
// style page Portfolio

.portfolio {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-block: 2rem;
}
</style>
