<script setup lang="ts">
import { type ProCard } from "@/types";
const { id } = useRoute().params;

const { data, error } = await useFetch<ProCard>(`/api/cards/${id}`);
if (error.value) {
    throw createError({
        statusCode: error.value?.statusCode,
        statusMessage: error.value?.statusMessage,
    });
}
</script>

<template>
    <section class="card-id container">
        <div class="card-details opacity-0" v-animate="{ animation: 'animate__jackInTheBox' }">
            <NuxtLink to="/portfolio" class="button button--accent">Go back to Portfolio</NuxtLink>
            <div class="card-details__img-wrap">
                <NuxtImg :src="data?.img" :alt="data?.imgAlt" format="webp" draggable="false" />
            </div>
            <div class="card-details__desc" :lang="data?.dataLang ?? 'en-En'">
                <p>{{ data?.dataDesc ?? "Description" }}</p>
            </div>
            <div class="card-details__content">
                <h1 class="card-details__title">{{ data?.title }}</h1>
                <p class="card-details__description" v-html="data?.desc"></p>
                <div class="card-details__button-wrap">
                    <a :href="data?.gitHub" target="_blank" class="button button--accent">GitHub</a>
                    <a :href="data?.liveSite" target="_blank" class="button button--accent">Visit Site</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index" as *;
// style card-id

.card-id {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-block: 2rem;
}

.card-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    max-width: 37.5rem; // 600px
    width: 100%;

    background-color: transparent;
    // opacity: 0.9;

    .card-details__img-wrap {
        max-width: rem-clamp(300, 360);
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;

        border-radius: 1rem;
        background-color: transparent;

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

    .card-details__desc {
        max-width: rem-clamp(300, 360);
        width: 100%;
        overflow: hidden;

        font-size: 1.2rem;
        background-color: var(--primary);
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-radius: 1rem;
        color: var(--text-primary-light);

        hyphens: auto;
        word-wrap: break-word;

        @include mobile-s {
            max-width: 100%;
        }
    }

    .card-details__content {
        max-width: rem-clamp(300, 360);
        width: 100%;
        overflow: hidden;
        background-color: var(--primary);
        padding: 0.5rem 1rem 1rem 1rem;
        border-radius: 1rem;

        @include mobile-s {
            max-width: 100%;
        }
    }

    .card-details__title {
        font-size: 2rem;
        margin-bottom: 10px;
        color: var(--text-primary);
    }

    .card-details__description {
        font-size: 1rem;
        margin-bottom: 20px;
        color: var(--text-primary-light);
    }

    .card-details__button-wrap {
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
}
</style>
