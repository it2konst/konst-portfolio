<script setup lang="ts"></script>

<template>
    <section class="about container">
        <h1 class="app__title-3d" v-animate="{ animation: 'animate__flipInX' }">About</h1>
        <p>Under construction</p>
    </section>
</template>

<style lang="scss">
// @use "~/assets/scss/helpers/index" as *;
// style page About

.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-block: 2rem;
}
</style>
