// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@storyblok/nuxt", "reka-ui/nuxt", "@nuxtjs/tailwindcss"],

  storyblok: {
    accessToken: "storyblok_public_key",
    apiOptions: {
      region: "eu",
    },
  },
});
