<script lang="ts" setup>
import DarkMode from "@/components/block/DarkMode.vue";
import AppLogo from "./block/AppLogo.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const appRouter = useRouter();
const IS_LOCK_CLASS = "is-lock";

const isBurger = ref(false);
const toggleBurger = () => {
    isBurger.value = !isBurger.value;
    document.documentElement.classList.toggle(IS_LOCK_CLASS);
};
const closeMenu = () => {
    isBurger.value = false;
    document.documentElement.classList.remove(IS_LOCK_CLASS);
};

interface MenuItem {
    path: string;
    label: string;
}
const menuItems: MenuItem[] = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
];
</script>

<template>
    <header class="header">
        <div class="container">
            <app-logo></app-logo>
            <div class="header__overlay" :class="{ 'is-active': isBurger }" @click="closeMenu">
                <nav class="header__menu">
                    <ul class="header__menu-list">
                        <li class="header__menu-item" v-for="(item, index) in menuItems" :key="index">
                            <NuxtLink
                                :to="item.path"
                                class="header__menu-link"
                                :class="{
                                    'is-active': item.path === appRouter.currentRoute.value.fullPath,
                                }"
                            >
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                        <li class="header__menu-item">
                            <DarkMode />
                        </li>
                        <li class="header__menu-item" v-if="isBurger" style="pointer-events: none">
                            <hr class="header__menu-divider" />
                            <app-logo></app-logo>
                            <!-- <img src="/images/logo.svg" width="40" height="40" alt="" draggable="false" /> -->
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="header__contact" v-show="!isBurger">
                <NuxtLink to="https://github.com/it2konst" target="_blank" class="button">Main GitHub </NuxtLink>
            </div>

            <button
                class="header__burger-button burger-button"
                :class="{ 'is-active': isBurger }"
                @click="toggleBurger"
                type="button"
                aria-label="Open menu"
                title="Open menu"
            >
                <span class="burger-button__line"></span>
                <span class="burger-button__line"></span>
                <span class="burger-button__line"></span>
            </button>
        </div>
    </header>
</template>

<style lang="scss">
@use "~/assets/scss/helpers/index" as *;
// style Header

.header {
    position: sticky;
    z-index: 100;
    top: 0;

    max-width: 100%;
    width: 100%;

    opacity: 0.9;
    background-color: var(--primary);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    animation-name: scrolling-header;
    animation-fill-mode: both;
    animation-timeline: scroll();
    animation-range: rem(100) rem(200);

    @include mobile {
        opacity: 1;
    }

    @keyframes scrolling-header {
        to {
            box-shadow: 0 0 1rem 0 var(--primary-light);
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1rem 1rem 1rem;
    }

    &__overlay {
        position: relative;

        @include mobile {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: grid;
            place-items: center;

            background-color: transparent;
            backdrop-filter: blur(3px);
            transition-duration: var(--transition-duration);

            &:not(.is-active) {
                @include hide;
                transform: translate(-100%, 0%);

                ~ .header__contact {
                    display: none;
                }
            }
        }
    }

    &__menu {
        @include mobile {
            display: grid;
            place-items: center;
            width: 100%;
            max-width: 100%;
        }
    }

    &__menu-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        @include mobile {
            flex-direction: column;
            padding-block: 2rem;
            width: 100%;
            max-width: 80%;
            gap: 1rem;

            outline: var(--outline-theme);
            border-radius: 1rem;

            background-color: var(--primary);
        }
    }

    &__menu-item {
        display: grid;
        place-items: center;
        border-radius: 0.5rem;

        .header__menu-divider {
            width: 100%;
            border-color: var(--primary-light);
        }

        a {
            display: grid;
            place-items: center;

            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            height: 100%;
            width: 100%;
            outline: rem(2) solid transparent;

            font-family: var(--font-family-base);
            font-size: rem-clamp(16, 22);
            letter-spacing: -0.03em;
            color: var(--text-primary);

            transition: outline 0.3s ease-in, background-color 0.3s ease-in, color 0.3s ease-in;

            &.is-active {
                outline: var(--outline-theme);
            }

            @include hover {
                background-color: var(--secondary);
                color: var(--primary);
            }
        }

        @include mobile {
            max-width: 12.5rem; // 200px
            width: 100%;
            // text-transform: uppercase;
            a {
                font-size: 20px;
            }
        }
    }

    &__burger-button {
        display: none;

        @include mobile {
            display: inline-flex;
        }
    }

    &__contact {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
}
</style>
