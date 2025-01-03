// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },
    nitro: {
        includeFiles: ["server/data/data-cards.json"], // Указать путь к файлу
    },
    devtools: { enabled: true },
    routeRules: { "/": { prerender: true } },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use 'assets/scss/main.scss' as *;
                        @use 'assets/scss/helpers/index' as *;
                    `,
                },
            },
        },
    },
    compatibilityDate: "2024-12-27",
    modules: ["@nuxt/image"],
});
