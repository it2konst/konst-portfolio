<script setup lang="ts"></script>

<template>
    <main>
        <section class="hero" aria-labelledby="hero-title">
            <div class="hero__main container">
                <div class="hero__body">
                    <h1 class="hero__title" id="hero-title">
                        Frontend Developer | Building Modern, Responsive Web
                        Solutions
                    </h1>
                    <div class="hero__description">
                        <p>
                            Specializing in creating modern and functional
                            websites using HTML, CSS, JavaScript, as well as
                            working with React and Vue.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
.hero {
    padding-block: rem-clamp(20, 40);
    zoom: 0.9;
}

.hero__main {
    background-color: var(--color-dark-10);
    border-radius: 2rem;
    padding: rem-clamp(20, 40);
    opacity: 0.75;
}

.hero__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem-clamp(10, 20);
    font-size: rem-clamp(18, 24);
}
</style>
