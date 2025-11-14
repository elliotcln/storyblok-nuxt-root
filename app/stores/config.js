import { useLocalStorage, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => ({
    config: useLocalStorage("config", {}),
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

      // console.log("story", story.value.content);

      this.config = useLocalStorage("config", story.value.content);
      console.log("this.config", this.config);
      return story.value.content;

      // this.config = story.content.value;
    },
  },
});
