<script setup lang="ts">
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

const card = ref<Card | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);

// Получаем ID из маршрута
const route = useRoute();
const cardId = route.params.id;

onMounted(async () => {
    try {
        // Загружаем карточку по ID
        const response = await $fetch<Card>(`/api/cards/${cardId}`);
        card.value = response;
    } catch (err) {
        error.value = "Failed to load card. Please try again later.";
        console.error(err);
    } finally {
        isLoading.value = false;
    }
});
</script>

<template>
    <!-- <AppBg /> -->
    <!-- <AppHeader /> -->
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="card" class="card-details container">
        <NuxtLink to="/portfolio" class="button button--accent">Назад к карточкам</NuxtLink>
        <div class="card-details__img-wrap">
            <NuxtImg :src="card.img" :alt="card.imgAlt" format="webp" draggable="false" />
        </div>
        <div class="card-details__content">
            <h1 class="card-details__title">{{ card.title }}</h1>
            <p class="card-details__description" v-html="card.desc"></p>
            <div class="card-details__button-wrap">
                <a :href="card.gitHub" target="_blank" class="button button--accent">GitHub</a>
                <a :href="card.liveSite" target="_blank" class="button button--accent">Live Site</a>
            </div>
        </div>
    </div>
    <div v-else>Card not found</div>
</template>

<style lang="scss" scoped>
// style card-details
.card-details {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 600px;
    width: 100%;
    padding-block: 2rem;

    // outline: var(--outline);
    // background-color: var(--color-dark);
    opacity: 0.85;
}

.button {
    margin-bottom: 1rem;
}

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

.card-details__content {
    background-color: var(--color-dark);
    padding: 2rem;
    border-radius: 1rem;
}

.card-details__title {
    font-size: 2rem;
    margin-bottom: 10px;
}

.card-details__description {
    font-size: 1.2rem;
    margin-bottom: 20px;
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
</style>
