<template>
  <Icon :name="blok.icon.icon" :size="blok.size + 'em'" />
</template>

<script setup lang="ts">
defineProps<{ blok: IconItem }>();
</script>

<style scoped></style>
