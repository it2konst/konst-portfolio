<script lang="ts" setup>
import DarkMode from "@/components/block/DarkMode.vue";
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
        <div class="header__body">
            <div class="header__body-inner container">
                <a class="header__logo logo" href="/" aria-label="Home" title="Home" draggable="false">
                    <img
                        class="logo__image"
                        src="/images/logo.svg"
                        alt=""
                        width="50"
                        height="50"
                        loading="lazy"
                        draggable="false"
                    />
                    <p class="h4">KonstBerg</p>
                </a>
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
                        </ul>
                    </nav>
                    <NuxtLink
                        to="https://github.com/it2konst"
                        target="_blank"
                        class="header__contact-us-link button button--accent"
                        >My GitHub</NuxtLink
                    >
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
@use "~/assets/scss/helpers/index" as *;
// style Header

.header__body {
    opacity: 0.9;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    // border-radius: 0rem 0rem 2rem 2rem;

    .header__logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .button--accent {
        width: rem-clamp(150, 180);
    }

    .header__menu-link {
        font-size: rem-clamp(16, 20);
    }

    .header__overlay.is-active .header__menu {
        padding-block: 0.5rem;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 50%;
            border-radius: 2rem;
            background-color: #ffffff10;

            // background-color: transparent;
            outline: var(--outline);
            pointer-events: none;
            // filter: blur(0.1rem);
        }
        .header__menu-link {
            display: grid;
            place-content: center;
            width: rem-clamp(150, 180);

            border-radius: rem(10);
            font-size: 1.4rem;

            &.is-active {
                outline: var(--outline);
            }

            @include hover {
                background-color: #ffffff20;
            }
        }
    }
}
</style>
