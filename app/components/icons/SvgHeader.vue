<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: [String, Number],
        default: 24,
    },
    offsetX: {
        type: [String, Number],
        default: 0,
    },
    offsetY: {
        type: [String, Number],
        default: 0,
    },
});

// <svg class="socials__icon" aria-hidden="true">
//     <use xlink:href="./images/sprites/socials.svg#icon-bh"></use>
// </svg>
</script>

<template>
    <div>
        <svg
            class="icon"
            :width="size"
            :height="size"
            :style="{ transform: `translate(${offsetX}px, ${offsetY}px)` }"
            draggable="false"
            aria-hidden="true"
        >
            <use :href="`#${name}`"></use>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="icon-vue" viewBox="0 0 128 128">
                <path
                    fill="none"
                    color="none"
                    d="m0 8.934 49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17 23.002.009m-23.002-.01 23.002.01"
                />
                <path
                    fill="#35495e"
                    color="#35495e"
                    d="m25.997 9.393 23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"
                />
                <path
                    fill="#41b883"
                    color="#41b883"
                    d="m.91 9.569 25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"
                />
            </symbol>

            <symbol id="icon-html5" viewBox="0 0 128 128">
                <path
                    fill="#E44D26"
                    color="#E44D26"
                    d="M19.037 113.876 9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                />
                <path fill="#F16529" color="#F16529" d="m64 116.8 36.378-10.086 8.559-95.878H64z" />
                <path
                    fill="#EBEBEB"
                    color="#EBEBEB"
                    d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                />
                <path
                    fill="#fff"
                    color="#fff"
                    d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                />
            </symbol>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.icon {
    display: grid;
    place-items: center;
    overflow: hidden;

    fill: currentColor; /* Цвет через currentColor */
    border: none;
    pointer-events: none;
}

// .icon {
//     color: darkcyan;
// }
</style>
