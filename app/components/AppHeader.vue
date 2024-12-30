<script lang="ts" setup>
import { ref, defineProps } from "vue";

const isBurger = ref(false);
const toggleBurger = () => {
    isBurger.value = !isBurger.value;
    document.documentElement.classList.toggle("is-lock"); // documentElement - это <html>
};

const closeMenu = () => {
    isBurger.value = false;
    document.documentElement.classList.remove("is-lock");
};

interface Props {
    menuActivePath?: string | null;
}
const props = defineProps<Props>();

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
        <div class="header__promo">
            <div class="header__promo-inner container">
                <a
                    class="header__promo-link"
                    href="https://github.com/it2konst"
                    target="_blank"
                >
                    <span class="icon icon--yellow-arrow"
                        >Check out my GitHub</span
                    >
                </a>
            </div>
        </div>
        <div class="header__body">
            <div class="header__body-inner container">
                <a
                    class="header__logo logo"
                    href="/"
                    aria-label="Home"
                    title="Home"
                >
                    <img
                        class="logo__image"
                        src="/images/logo.svg"
                        alt=""
                        width="50"
                        height="50"
                        loading="lazy"
                    />
                    <p class="h4">KonstBerg</p>
                </a>
                <div class="header__overlay" :class="{ 'is-active': isBurger }">
                    <nav class="header__menu">
                        <ul class="header__menu-list">
                            <li
                                class="header__menu-item"
                                v-for="item in menuItems"
                                :key="item.path"
                            >
                                <NuxtLink
                                    :to="item.path"
                                    class="header__menu-link"
                                    :class="{
                                        'is-active':
                                            item.path === props.menuActivePath,
                                    }"
                                >
                                    {{ item.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <NuxtLink
                        to="/contact"
                        class="header__contact-us-link button button--accent"
                        >Contact Us
                    </NuxtLink>
                </div>
                <button
                    class="header__burger-button burger-button visible-mobile"
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
        </div>
    </header>
</template>

<style lang="scss">
.header__body {
    opacity: 0.75;

    .header__logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .button--accent {
        width: rem-clamp(150, 180);
    }

    .header__overlay.is-active .header__menu {
        padding-block: 0.5rem;
        .header__menu-link {
            zoom: 1.2;
            position: relative;
            display: grid;
            place-content: center;

            width: rem-clamp(150, 180);
            border-radius: rem(10);
            background-color: transparent;

            &::after {
                content: "";
                position: absolute;
                z-index: -1;
                inset: 0;
                border-radius: rem(10);
                border: 2px solid #ffffff60;
                background-color: var(--color-dark-10);
                pointer-events: none;
            }

            &.is-active {
                background-color: #ffffff20;
            }

            @include hover {
                background-color: #ffffff20;
            }
        }
    }
}
</style>
