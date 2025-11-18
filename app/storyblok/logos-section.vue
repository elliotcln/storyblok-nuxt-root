<template>
  <div
    class="mx-auto flex flex-wrap items-center justify-around gap-x-8 gap-y-10 sm:gap-x-10 lg:-mx-6"
  >
    <template v-for="(logo, index) in blok.logos" :key="index">
      <NuxtLink
        v-if="logo.meta_data.source"
        :to="logo.meta_data.source"
        target="_blank"
        class="max-w-[200px]"
      >
        <NuxtImg
          :src="logo.filename"
          :alt="logo.alt || null"
          class="h-8 w-full object-fill grayscale-100 transition duration-300 hover:grayscale-0"
        />
      </NuxtLink>
      <NuxtImg
        v-else
        :src="logo.filename"
        :alt="logo.alt || null"
        class="h-8 w-full max-w-[200px] object-fill grayscale-100 transition duration-300 hover:grayscale-0"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { LogosSection } from "~/types/storyblok-components";

defineProps<{ blok: LogosSection }>();
</script>

<style lang="scss" scoped></style>
