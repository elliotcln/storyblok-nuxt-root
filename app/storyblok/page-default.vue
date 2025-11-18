<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="currentBlok in blok.body"
      :key="currentBlok._uid"
      :blok="currentBlok"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ blok: PageDefault }>();
</script>

<style lang="scss" scoped></style>
