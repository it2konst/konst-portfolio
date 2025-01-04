<script setup lang="ts"></script>

<template>
    <section class="about container">
        <h1 class="app__title-3d">About</h1>
    </section>
</template>

<style lang="scss">
// style portfolio
.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-block: 2rem;
}
.app__title-3d {
    padding: 0.2rem 1rem 1rem 1rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #f5f5f5cc;

    border-radius: 2rem;
    background-color: #f5f5f5cc;
    opacity: 0.85;

    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191,
        1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191,
        1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
        1px 30px 60px rgba(16, 16, 16, 0.4);
}
</style>
