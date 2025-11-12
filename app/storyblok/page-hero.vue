<template>
  <UPageHero
    v-editable="blok"
    :title="blok.headline"
    :description="blok.description"
  >
    <img v-if="blok.image.filename" :src="blok.image.filename" alt="" />
  </UPageHero>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped></style>
