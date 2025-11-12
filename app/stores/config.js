import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => ({
    config: [],
  }),

  getters: {
    getConfig(state) {
      return state.config;
    },
  },

  actions: {
    async fetchConfig() {
      const { story } = await useAsyncStoryblok("config", {
        api: {
          version: "draft",
        },
      });
      this.config = story.value.content;
    },
  },
});
