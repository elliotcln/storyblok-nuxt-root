<template>
  <SkipLinks />
  <AppHeader :config="config" />
  <!-- <main id="main">
    <NuxtPage
      :class="[
        'page',
        route.path === '/' ? 'page--index' : 'page--' + route.path.substring(1),
      ]"
    />
  </main> -->
  <AppFooter :config="config" />
</template>

<script setup>
import { useLocalStorage, useStorage } from "@vueuse/core";

const route = useRoute();
const configStore = useConfigStore();

const config = ref();

// configStore.fetchConfig().then((result) => {
//   console.log("result", result);
//   config.value = result;

//   console.log("config.value", config);
// });

onMounted(async () => {
  await configStore.fetchConfig().then((result) => {
    console.log("result", result.value);
    configStore.setConfig(result.value.content);
    config.value = result.value;

    console.log("config.value", config.value);
  });
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${config?.app_title}`
      : config?.app_title;
  },
});
</script>

<style lang="scss" scoped></style>
