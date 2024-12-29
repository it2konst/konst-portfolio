// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
      compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  routeRules: { "/": { prerender: true } },
  css: ["./app/assets/scss/main.scss"],
  compatibilityDate: "2024-12-27",
  modules: ["@nuxt/image"],
});