<template>
  <div
    v-editable="blok"
    :class="[
      blok.col_span ? { ['lg:col-span-' + blok.col_span]: true } : 'auto',
    ]"
  >
    <StoryblokComponent
      v-for="currentBlok in blok.body"
      :key="currentBlok._uid"
      :blok="currentBlok"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ blok: GridItem }>();
</script>

<style scoped></style>
