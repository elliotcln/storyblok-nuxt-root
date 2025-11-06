<template>
  <UPageSection
    headline="Nuxt & Storyblok"
    title="Welcome to the Nuxt & Storyblok Starter!"
    description="This is the home page."
  >
  </UPageSection>
  <UPageSection
    title="What you'll get with this starter"
    class="bg-primary-50"
    :features="items"
  >
  </UPageSection>
</template>

<script setup>
const items = ref([
  {
    icon: "stash:dollar-sign",
    title: "Is Nuxt UI free to use?",
    description:
      "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.",
  },
  {
    icon: "stash:wand-duotone",
    title: "Can I use Nuxt UI with Vue without Nuxt?",
    description:
      "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.",
  },
  {
    icon: "solar:upload-bold-duotone",
    title: "Is Nuxt UI production-ready?",
    description:
      "Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.",
  },
]);
</script>

<style lang="scss" scoped></style>
