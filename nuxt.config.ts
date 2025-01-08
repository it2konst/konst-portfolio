// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-12-27",
    future: { compatibilityVersion: 4 },
    ssr: true,
    devtools: { enabled: true },
    routeRules: { "/": { prerender: true } },
    modules: ["@nuxt/image"],
    image: {
        domains: ["https://konst-portfolio.vercel.app"],
        format: ["webp"],
    },
    css: ["~/assets/scss/main.scss", "~/assets/plugins/animate.min.css"],
    plugins: ["~/assets/plugins/animate.ts", "~/assets/plugins/dark-mode.ts"],
});
