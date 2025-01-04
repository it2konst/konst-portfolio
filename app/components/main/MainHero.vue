<script setup lang="ts"></script>

<template>
    <main>
        <section class="hero container" aria-labelledby="hero-title" lang="ru-Ru">
            <div class="hero__main">
                <div class="hero__body">
                    <h1 class="hero__title" id="hero-title">
                        Создаю современные и функциональные веб-сайты, которые работают на результат.
                    </h1>
                    <div class="hero__description">
                        <p>
                            Я специализируюсь на разработке стильных, интуитивно понятных и технологичных веб-сайтов.
                            Мои инструменты — это чистая и структурированная верстка с использованием HTML и CSS,
                            динамика и интерактивность благодаря JavaScript, а также мощь современных фреймворков, таких
                            как Vue.js и Nuxt.
                        </p>
                        <p>
                            Каждый проект — это не просто сайт, а уникальный цифровой продукт, который сочетает в себе
                            эстетику, удобство и высокую производительность. Я стремлюсь к тому, чтобы каждый элемент
                            работал на достижение ваших целей, будь то привлечение клиентов, повышение продаж или
                            укрепление бренда.
                        </p>
                        <p>Давайте создадим что-то по-настоящему впечатляющее вместе! 🚀</p>
                    </div>
                    <NuxtLink to="/portfolio" class="button button--accent">My Portfolio</NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
@use "~/assets/scss/helpers/index" as *;
// style section Hero

.hero {
    padding-block: rem-clamp(20, 40);
    // zoom: 0.9;
    // opacity: 0.75;
    opacity: 0.9;

    .hero__main {
        padding: rem-clamp(20, 40);
        border-radius: 2rem;
        outline: var(--border);
        background-color: var(--color-dark-10);
    }

    .hero__body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: rem-clamp(16, 24);
        font-size: rem-clamp(18, 24);
    }

    .hero__title {
        position: relative;
        // padding: 0.2rem 1rem 0.4rem 1rem;
        border-radius: 2rem;
        // background-color: #f5f5f530;

        text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
            1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 2px rgba(16, 16, 16, 0.4),
            1px 10px 3px rgba(16, 16, 16, 0.2), 1px 12px 4px rgba(16, 16, 16, 0.2), 1px 14px 5px rgba(16, 16, 16, 0.4);

        hyphens: auto;
        word-wrap: break-word;

        &::before {
            content: "✨";
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: -0.5rem;
            bottom: -0.5rem;
            right: -0.5rem;
            background-color: #f5f5f510;
            border-radius: 2rem;
            pointer-events: none;
        }
    }

    .hero__description {
        hyphens: auto;
        word-wrap: break-word;
    }

    .button.button--accent {
        align-self: center;
        zoom: 1.1;
    }
}
</style>
