<script setup lang="ts"></script>

<template>
    <NuxtLink class="logo" to="/" aria-label="Home" title="Home" draggable="false">
        <img src="/images/logo.svg" alt="" draggable="false" />
        <p class="h4">KonstBerg</p>
    </NuxtLink>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index" as *;
// style Logo

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    // max-width: rem-clamp(130, 204);
    // width: 100%;
    img {
        display: block;
        max-width: rem-clamp(34, 50);
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    p {
        color: var(--text-primary-light);

        transition: color 0.2s ease-in;
        @include hover {
            color: var(--secondary-light);
        }
    }
}
</style>
