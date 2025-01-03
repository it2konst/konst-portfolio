<script setup lang="ts">
import SvgHeader from "../components/icons/SvgHeader.vue";
import { ref, onMounted } from "vue";

interface Card {
    id: number;
    title: string;
    desc: string;
    descLang: string;
    dataDesc: string;
    dataLang: string;
    liveSite: string;
    gitHub: string;
    img: string;
    imgAlt: string;
    svgIcon: string;
}

const cards = ref<Card[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
    try {
        const response = await $fetch<Card[]>("/api/cards");
        cards.value = response;
    } catch (err) {
        error.value = "Failed to load cards. Please try again later.";
        console.error(err);
    } finally {
        isLoading.value = false;
    }
});

const loadCards = async () => {
    isLoading.value = true;
    error.value = null;
    try {
        const response = await $fetch<Card[]>("/api/cards");
        cards.value = response;
    } catch (err) {
        error.value = "Failed to load cards. Please try again later.";
        console.error(err);
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">
        {{ error }}
        <button @click="loadCards">Retry</button>
    </div>
    <section v-else class="cards">
        <NuxtLink v-for="card in cards" :key="card.id" :to="`/cards/${card.id}`">
            <figure class="cards__item">
                <div
                    class="cards__img-wrap"
                    :data-desc="card.dataDesc ?? 'data Description'"
                    :lang="card.dataLang ?? 'en-En'"
                >
                    <NuxtImg :src="card.img" :alt="card.imgAlt" format="webp" draggable="false" />
                </div>
                <figcaption class="cards__content">
                    <div class="cards__svg-wrap">
                        <SvgHeader :name="card.svgIcon" size="40" :offsetX="0" :offsetY="3" />
                    </div>
                    <h3 class="cards__title">{{ card.title ?? "Title" }}</h3>
                    <p
                        class="cards__description"
                        :lang="card.descLang ?? 'en-En'"
                        v-html="card.desc ?? 'Description'"
                    ></p>
                    <div class="cards__button-wrap" @click.stop>
                        <a :href="card.gitHub ?? '#'" target="_blank" class="button button--accent">GitHub</a>
                        <a :href="card.liveSite ?? '#'" target="_blank" class="button button--accent">Live Site</a>
                    </div>
                </figcaption>
            </figure>
        </NuxtLink>
    </section>
</template>

<style lang="scss">
.cards {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: rem-clamp(24, 48);
    justify-content: center;

    &__item {
        position: relative;
        display: flex;
        flex-direction: column;

        max-width: rem-clamp(300, 360);
        width: 100%;
        // height: max-content;

        // opacity: 0.55;
        opacity: 0.85;
        outline: var(--outline);
        border-radius: 1rem;
        overflow: hidden;
        transition: opacity 0.2s ease-in, transform 0.2s ease-in;

        @include mobile-s {
            max-width: 100%;
        }

        @include hover {
            opacity: 0.95;
            transform: translateY(-0.2rem);
        }
    }

    &__img-wrap {
        // z-index: 3;
        max-width: rem-clamp(300, 360);
        width: 100%;
        aspect-ratio: 16 / 9;
        // overflow: hidden;
        // background-color: transparent;

        @include mobile-s {
            max-width: 100%;
        }

        img {
            max-width: 100%;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    &__content {
        position: relative;
        z-index: 2;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        padding: 0rem 1rem 1rem 1rem;
        background-color: var(--color-dark);

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 5rem;
            height: 3rem;
            border-radius: 0 100% 0 0;
            // border-radius: 0 100% 100% 0;
            background-color: var(--color-dark);
            transform: translateY(-80%);
            pointer-events: none;
            // outline: var(--outline);
        }

        &:before1 {
            position: absolute;
            content: "";
            bottom: 99%;
            left: -60%;
            width: 0;
            border-style: solid;
            border-width: 10rem 0 0 18.75rem; // 80px 0 0 300px
            border-color: transparent transparent transparent var(--color-dark);
            // border-width: 3rem 0 0 18.75rem; // 48px 0 0 300px
            pointer-events: none;
            user-select: none;
        }

        &:hover {
            .cards__description {
                max-height: 10lh;
                // transform: scale(1.04);
            }
        }
    }

    &__svg-wrap {
        display: grid;
        place-content: center;

        position: absolute;
        bottom: 100%;

        max-width: 3.25rem; // 52px
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;

        overflow: hidden;
        background-color: var(--color-dark);
        outline: var(--outline);
        pointer-events: none;

        // > div {
        //     transform: translate(0, 13%);
        //     pointer-events: none;
        // }
    }

    &__title {
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &__description {
        position: relative;
        padding-inline: 0.4lh;
        padding-block: 0.1lh;
        margin: unset;

        flex-grow: 1;
        margin-bottom: auto;
        max-height: 2.2lh;
        height: max-content;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.8rem;

        // text-align: justify;
        // word-break: break-all;
        // overflow-wrap: break-word;
        // hyphens: auto;
        // word-wrap: break-word;

        // -webkit-hyphens: auto;
        // -moz-hyphens: auto;
        // -ms-hyphens: auto;
        hyphens: auto;
        word-wrap: break-word;

        &:before {
            position: absolute;
            content: "";
            inset: 0;
            background-color: #ffffff20;
            border-radius: 1rem;
            pointer-events: none;
        }

        transition: max-height 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

        @include mobile-s {
            max-height: 10lh;
        }
    }

    .cards__button-wrap {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: auto;

        a {
            max-width: calc(50% - 0.5rem);
            width: 100%;
            user-select: none;
        }
    }

    //---dataDesc---
    .cards__img-wrap::after {
        content: "";
        position: absolute;
        left: -50%;
        top: -50%;
        z-index: 1;

        width: 160%;
        height: 160%;
        // border-radius: 50%;
        border-radius: 0 0 100% 0;
        background-color: #00000060;
        outline: var(--outline);
        pointer-events: none;

        transform-origin: top left;
        transform: scale(0);
        // transform: scale(1);
        transition: transform 0.3s ease-in-out;
    }

    .cards__img-wrap:hover::after {
        transform: scale(1);
    }

    .cards__img-wrap::before {
        content: attr(data-desc);
        position: absolute;
        inset: 0;
        z-index: 2;

        padding: 0.5rem 1rem;
        // background-color: transparent;
        background-color: #00000060;
        pointer-events: none;

        font-family: var(--font-family-base);
        font-weight: 400;
        font-size: rem-clamp(18, 22);
        // font-size: rem(18);
        letter-spacing: -0.03em;
        line-height: 1.2;
        color: var(--color-light);

        hyphens: auto;
        word-wrap: break-word;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        text-overflow: ellipsis;

        // border-radius: 0 0 0 100%;

        opacity: 0;
        // opacity: 0.75;
        transition: opacity 0.4s ease-in-out;

        // @include mobile-s {
        //     font-size: rem(18);
        // }
    }

    .cards__img-wrap:hover::before {
        opacity: 0.85;
    }
}
</style>
