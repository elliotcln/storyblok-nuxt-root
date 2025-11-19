<template>
  <div
    v-editable="blok"
    :class="[
      blok.col_span_md ? { ['md:col-span-' + blok.col_span_md]: true } : null,
      blok.col_span_lg ? { ['lg:col-span-' + blok.col_span_lg]: true } : null,
      blok.row_span_md ? { ['md:row-span-' + blok.row_span_md]: true } : null,
      blok.row_span_lg ? { ['lg:row-span-' + blok.row_span_lg]: true } : null,
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
