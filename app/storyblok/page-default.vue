<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="currentBlok in blok.body"
      :key="currentBlok._uid"
      :blok="currentBlok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped></style>
