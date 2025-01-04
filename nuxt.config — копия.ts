// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-12-27",
    future: { compatibilityVersion: 4 },
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
    modules: ["@nuxt/image"],
    image: {
        domains: ["https://konst-portfolio.vercel.app"],
        format: ["webp"],
    },
});
