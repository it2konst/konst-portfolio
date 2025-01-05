<script setup lang="ts"></script>

<template>
    <section class="about container">
        <h1 class="app__title-3d">About</h1>
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

.app__title-3d {
    padding: 0rem 1rem 0.4rem 1rem;

    text-transform: uppercase;
    font-weight: 500;
    color: #f5f5f5cc;

    border-radius: 2rem;
    background-color: #f5f5f5cc;

    // text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191,
    //     1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191,
    //     1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    //     1px 30px 60px rgba(16, 16, 16, 0.4);
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191,
        1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
        1px 10px 2px rgba(16, 16, 16, 0.4), 1px 12px 4px rgba(16, 16, 16, 0.2), 1px 14px 6px rgba(16, 16, 16, 0.2),
        1px 16px 8px rgba(16, 16, 16, 0.4);

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
</style>
