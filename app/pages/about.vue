<script setup lang="ts">
const menuActivePath = "/about";
</script>

<template>
    <AppBg />
    <AppHeader :menu-active-path="menuActivePath" />
    <main>
        <section class="about container">
            <h1>About</h1>
            <svg class="circle" viewBox="0 0 100 100">
                <path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z" />
                <text>
                    <textPath xlink:href="#circle">About - Konst - Portfolio 4</textPath>
                </text>
            </svg>
        </section>
    </main>
</template>

<style lang="scss">
.circle {
    display: block;
    overflow: visible;
    width: 100px;
    font-size: 28px;
    fill: darkgoldenrod;
    margin-left: 2rem;
}

.circle path {
    fill: none;
}
</style>
