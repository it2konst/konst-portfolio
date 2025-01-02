<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Card {
    id: number;
    name: string;
    description: string;

    link: string;
    image: string;
}
const cards = ref<Card[]>([]);

onMounted(async () => {
    const response = await $fetch<Card[]>("/api/cards"); // ("/api/cards?limit=3");
    cards.value = response;
});
</script>

<template>
    <!-- <ul>
        <li v-for="card in cards" :key="card.id">
            <h2>{{ card.name }}</h2>
            <p>{{ card.description }}</p>
        </li>
    </ul> -->

    <section class="cards-wrapper">
        <div v-for="card in cards" :key="card.id" class="card-grid-space">
            <a
                class="card"
                :href="card.link"
                :style="`--bg-img: url(${card.image})`"
            >
                <div>
                    <h3>{{ card.name }}</h3>
                    <p>{{ card.description }}</p>
                    <div class="date">6 Oct 2017</div>
                    <div class="tags">
                        <div class="tag">HTML</div>
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700");
// font-family: "Heebo"; // font-family: "Open Sans";
:root {
    // --color: #3c3163;
    --color: #3c3163;
    --transition-time: 0.5s;
}

.cards-wrapper {
    display: grid;
    // justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    // padding: 4rem;
    margin: 0 auto;
    // width: max-content;
}

.card {
    font-family: "Heebo";
    background-image: var(--bg-img);
    opacity: 0.75;
    // --bg-filter-opacity: 0.8;

    // background-image: linear-gradient(
    //         rgba(0, 0, 0, var(--bg-filter-opacity)),
    //         rgba(0, 0, 0, var(--bg-filter-opacity))
    //     ),
    //     var(--bg-img);

    // height: 20em;
    // width: 15em;
    // font-size: 1.5rem;
    color: white;
    border-radius: 1rem;
    padding: 1rem;
    /*margin: 2em;*/
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 5em -1em black;
    transition: all, var(--transition-time);
    position: relative;
    overflow: hidden;
    // border: 10px solid #ccc;
    outline: 0.2rem solid #ffffff60;
    text-decoration: none;
}

.card:hover {
    transform: rotate(0);
}

.card h3 {
    position: relative;
    display: inline-block;
    margin-top: 3rem;
    padding-inline: 0.5rem;
    // font-size: 1.5rem;
    // line-height: 1.2rem;

    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 0;
        background-color: #00000099;
        border-radius: 0.5rem;
    }
}

.card p {
    font-size: 1rem;
    // font-family: "Open Sans";
    margin-top: 0.5rem;
    // line-height: 2rem;
}

.card .tags {
    display: flex;
}

.card .tags .tag {
    font-size: 0.75rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0.3rem;
    padding: 0 0.5rem;
    margin-right: 0.5rem;
    line-height: 1.5rem;
    transition: all, var(--transition-time);
}

.card:hover .tags .tag {
    background: var(--color);
    color: white;
}

.card .date {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.75rem;
    padding: 1rem;
    line-height: 1rem;
    opacity: 0.8;
}

.card:before,
.card:after {
    content: "";
    transform: scale(0);
    transform-origin: top left;
    border-radius: 50%;
    position: absolute;
    left: -50%;
    top: -50%;
    z-index: -5;
    transition: all, var(--transition-time);
    transition-timing-function: ease-in-out;
}

.card:before {
    background: #ddd;
    width: 250%;
    height: 250%;
}

.card:after {
    background: white;
    width: 200%;
    height: 200%;
}

.card:hover {
    color: var(--color);
}

.card:hover:before,
.card:hover:after {
    transform: scale(1);
}
</style>
