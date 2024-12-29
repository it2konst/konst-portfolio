<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

interface MenuItem {
    path: string;
    label: string;
}

const route = useRoute();

const menuItems: MenuItem[] = [
    { path: "/", label: "Home" },
    { path: "/news", label: "News" },
    { path: "/about", label: "About" },
];

// Вычисляемое свойство для активной ссылки
const activeLink = computed(() => route.path);
</script>

<template>
    <header class="header" data-js-header>
        <div class="header__promo">
            <div class="header__promo-inner container">
                <a
                    class="header__promo-link"
                    href="https://github.com/it2konst"
                    target="_blank"
                >
                    <span class="icon icon--yellow-arrow"
                        >Check out my GitHub - it2konst</span
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
                </a>
                <div class="header__overlay" data-js-header-overlay>
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
                                        'is-active': activeLink === item.path,
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
                    type="button"
                    aria-label="Open menu"
                    title="Open menu"
                    data-js-header-burger-button
                >
                    <span class="burger-button__line"></span>
                    <span class="burger-button__line"></span>
                    <span class="burger-button__line"></span>
                </button>
            </div>
        </div>
    </header>
</template>
