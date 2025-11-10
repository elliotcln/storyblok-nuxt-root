<template>
  <UApp>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </UApp>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Nuxt & Storyblok Starter",
});
</script>

<style lang="scss" scoped></style>
