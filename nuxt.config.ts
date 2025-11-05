import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@storyblok/nuxt", "reka-ui/nuxt"],
  css: ["~/assets/css/app.css"],
  vite: { plugins: [tailwindcss()] },

  storyblok: {
    accessToken: "storyblok_public_key",
    apiOptions: {
      region: "eu",
    },
  },
});
