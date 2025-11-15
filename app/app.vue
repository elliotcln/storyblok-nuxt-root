<template>
  <SkipLinks />
  <AppHeader :config="config" />
  <main id="main">
    <NuxtPage
      :class="[
        'page',
        route.path === '/' ? 'page--index' : 'page--' + route.path.substring(1),
      ]"
    />
  </main>
  <AppFooter :config="config" />
</template>

<script setup>
const route = useRoute();
const configStore = useConfigStore();

const config = ref();

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
      ? `${titleChunk} - ${config?.value.app_title}`
      : config?.value.app_title;
  },
});
</script>

<style lang="scss" scoped></style>
