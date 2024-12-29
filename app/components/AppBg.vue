<template>
    <div class="app__bg-image">
        <!-- <NuxtImg src="/images/screen.webp" alt="" format="webp" /> -->
    </div>
</template>

<style lang="scss">
.app__bg-image {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: -1;
    overflow: hidden;
    opacity: 0.75;

    // img {
    //     width: 100%;
    //     height: 100%;
    //     object-fit: cover;
    // }

    // &::after {
    //     content: "";
    //     position: absolute;
    //     inset: 0;
    //     background: linear-gradient(
    //         to bottom,
    //         rgba(255, 255, 255, 0) 30%,
    //         rgba(0, 0, 0, 0.5) 100%
    //     );
    //     pointer-events: none;
    // }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 40%,
                rgba(0, 0, 0, 0.5) 100%
            ),
            url("/images/app-bg.webp");
        background-repeat: no-repeat repeat;
        background-size: cover;
        background-position: center;

        @include tablet {
            background-image: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0) 40%,
                    rgba(0, 0, 0, 0.5) 100%
                ),
                url("/images/app-bg-1024.webp");
        }
    }
}
</style>
