<template>
  <header role="banner" class="header border-accent border-b px-4 py-2 lg:px-8">
    <div class="header-content flex h-full w-full items-center justify-between">
      <Skeleton v-if="!config" class="h-6 w-[250px]" />
      <template v-else>
        <NuxtLink
          v-if="!config.app_logo.filename"
          to="/"
          class="text-lg font-semibold"
          >{{ config.app_title }}</NuxtLink
        >
        <NuxtLink v-else to="/"
          ><NuxtImg :src="config.app_logo.filename" alt="" class="max-h-16"
        /></NuxtLink>
      </template>

      <!-- Desktop Navigation -->
      <NavigationDesktop v-if="config?.nav_main" :items="config.nav_main" />
      <!--  -->

      <div class="header-content--right flex gap-2">
        <NavigationMobile
          v-if="config.nav_main"
          :items="config.nav_main"
          :actions="config.nav_actions"
        />

        <StoryblokComponent
          v-for="currentBlok in config.nav_actions"
          :key="currentBlok._uid"
          :blok="currentBlok"
          class="hidden xl:inline-flex"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  config: AppConfig;
}>();
</script>

<style lang="scss" scoped></style>
