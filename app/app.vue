<template>
  <UApp>
    <AppHeader :config="config" />
    <NuxtPage
      id="main"
      :class="[
        'page',
        route.path === '/' ? 'page--index' : 'page--' + route.path.substring(1),
      ]"
    />
    <AppFooter :config="config" />
  </UApp>
</template>

<script setup>
const route = useRoute();
const configStore = useConfigStore();
configStore.fetchConfig();

const config = computed(() => {
  console.log("config", config);
  return configStore.getConfig;
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${config.value.app_title}`
      : config.value.app_title;
  },
});
</script>

<style lang="scss" scoped></style>
