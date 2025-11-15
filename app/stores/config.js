import { get, useLocalStorage, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => ({
    config: useLocalStorage("config", null),
  }),

  getters: {
    getConfig(state) {
      return state.config;
    },
  },

  actions: {
    setConfig(newConfig) {
      this.config = useLocalStorage("config", newConfig);
    },
    async fetchConfig() {
      const result = ref();
      const localConfig = useLocalStorage("config");

      if (localConfig.value !== undefined) {
        console.log("using local config:", localConfig.value);
        result.value = JSON.parse(localStorage.getItem("config"));
      } else {
        console.log("no local config - fetching from Storyblok");

        await useAsyncStoryblok("config", {
          api: {
            version: "draft",
            resolve_links: "url",
          },
        }).then(({ story }) => {
          console.log("fetched config from Storyblok:", story?.value?.content);
          useLocalStorage("config", story.value.content);
          result.value = story.value.content;
        });
      }

      return result;
    },
  },
});
