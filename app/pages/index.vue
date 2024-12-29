<script setup lang="ts"></script>

<template>
    <!-- <header class="header"></header> -->
    <AppBg />
    <AppHeader />

    <main>
        <h1>Home</h1>
    </main>

    <footer class="footer container"></footer>
</template>

<style lang="scss">
.main {
    flex: 1;
}

.footer {
    // align-self: center;
    height: 60px;
    background-color: #ffffff60;
    @include tablet {
        height: 120px;
    }
}
</style>
