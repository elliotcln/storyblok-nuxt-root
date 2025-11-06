<template>
  <UHeader title="Nuxt & Storyblok Starter">
    <UNavigationMenu :items="links" />

    <template #right>
      <UButton to="/" class="hidden lg:inline-flex" icon="stash:signin-duotone"
        >Sign In</UButton
      >
    </template>

    <template #body>
      <UNavigationMenu :items="links" orientation="vertical" />
      <USeparator class="py-4" />
      <UButton class="w-full justify-center" to="/" icon="stash:signin-duotone"
        >Sign In</UButton
      >
    </template>
  </UHeader>
</template>

<script setup>
const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
</script>

<style lang="scss" scoped></style>
