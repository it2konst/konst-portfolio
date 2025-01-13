<script setup lang="ts"></script>

<template>
    <div class="switch">
        <input type="checkbox" id="themeSwitch" aria-label="Переключить на дневную / ночную тему" v-dark />

        <label for="themeSwitch">
            <div class="switch-block">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path
                            d="M10.6067 2.12132C9.83451 1.34916 8.89689 0.8358 7.9126 0.572756C8.44717 2.57528 7.93381 4.79418 6.36403 6.36396C4.79425 7.93374 2.57535 8.4471 0.572826 7.91253C0.83587 8.89682 1.34923 9.83444 2.12139 10.6066C4.46333 12.9485 8.26473 12.9485 10.6067 10.6066C12.9486 8.26466 12.9486 4.46326 10.6067 2.12132Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
        </label>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index" as *;
// style switch

.switch {
    position: relative;
    // margin: 0rem 0rem 0rem 1rem;
    // padding: rem(14) rem(24);

    // @include mobile {
    //     // padding: rem(10) rem(18);
    //     margin: 0.6rem 0rem 0rem 0rem;
    // }
}

input {
    position: absolute;
    visibility: hidden;
}

label {
    position: relative;
    width: 64px;
    height: 32px;
    // border: 2px solid #acacac;
    outline: var(--outline-theme);
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.switch-block {
    position: absolute;
    left: var(--left-position);
    transform: rotate(var(--rotate-angle));
    transition: all 0.5s ease;
}

.indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    transition: background-color 0.5s ease;
    color: var(--indicate);
    background-color: var(--bg-indicate);
    cursor: pointer;
}
</style>
