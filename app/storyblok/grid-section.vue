<template>
  <div
    v-editable="blok"
    :class="['grid md:grid-cols-2', columnsClass, blok.gap]"
  >
    <StoryblokComponent
      v-for="(currentBlok, index) in blok.body"
      :key="index"
      :blok="currentBlok"
    />
  </div>
</template>

<script setup lang="ts">
import type { GridSection } from "@/types/storyblok-components";
const { blok } = defineProps<{ blok: GridSection }>();

const columnsClass = ref("lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4");

watchEffect(() => {
  columnsClass.value = blok.cols
    ? "lg:grid-cols-" + blok.cols
    : "grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]";
});
</script>

<style lang="scss" scoped></style>
