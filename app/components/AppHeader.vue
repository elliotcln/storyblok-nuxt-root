<template>
  <header role="banner" class="header px-4 lg:px-8 py-2 border-b border-accent">
    <div class="header-content flex w-full h-full items-center justify-between">
      <Skeleton v-if="!config" class="w-[250px] h-6" />
      <template v-else>
        <NuxtLink
          v-if="!config.app_logo.filename"
          to="/"
          class="text-lg font-semibold"
          >{{ config.app_title }}</NuxtLink
        >
        <NuxtLink v-else to="/"
          ><img :src="config.app_logo.filename" alt="" class="h-12"
        /></NuxtLink>
      </template>

      <!-- Desktop Navigation -->
      <NavigationDesktop v-if="config?.nav_main" :items="config.nav_main" />
      <!--  -->

      <div class="header-content--right flex gap-2">
        <NavigationMobile v-if="config.nav_main" :items="config.nav_main" />

        <Button as-child class="hidden xl:inline-flex"
          ><NuxtLink to="/">Post an offer</NuxtLink></Button
        >
        <Button as-child class="hidden xl:inline-flex" variant="secondary"
          ><NuxtLink to="/signin"><LogIn /> Sign In</NuxtLink></Button
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { LogIn } from "lucide-vue-next";

defineProps({
  config: Object,
});
</script>

<style lang="scss" scoped></style>
