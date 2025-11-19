<template>
  <div v-editable="blok" v-if="blok" class="prose w-full max-w-none">
    <StoryblokRichText v-if="blok.body" :doc="blok.body" />
  </div>
</template>

<script setup lang="ts">
const { blok } = defineProps<{ blok: CustomSection }>();
</script>

<style scoped></style>
