import tailwindcss from "@tailwindcss/vite";
import mkcert from "vite-plugin-mkcert";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@storyblok/nuxt",
    "@pinia/nuxt",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/eslint",
  ],
  css: ["~/assets/css/app.css"],
  vite: { plugins: [tailwindcss(), mkcert()] },
  // ssr: false,

  shadcn: {
    prefix: "",
    componentDir: "~/components/ui",
  },

  storyblok: {
    accessToken: "GKGNH3J8IBPu0y0JAo5uxwtt",
    apiOptions: {
      version: "draft",
      region: "eu",
    },
  },

  scripts: {
    registry: {
      googleAnalytics: {
        id: "G-0DZR46SWDK",
      },
      googleTagManager: {
        id: "GTM-TSRND95",
      },
    },
  },

  // devServer: {
  //   https: true,
  // },
});