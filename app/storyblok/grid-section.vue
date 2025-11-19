<template>
  <div
    v-editable="blok"
    :class="[
      'flex',
      blok.cols ? 'grid' : null,
      columnsClass,
      blok.justify_items
        ? { ['lg:justify-items-' + blok.justify_items]: true }
        : null,
      blok.align_items
        ? { ['lg:align-items-' + blok.align_items]: true }
        : null,
      blok.justify_content
        ? { ['lg:justify-' + blok.justify_content]: true }
        : null,
      blok.align_content ? { ['lg:align-' + blok.align_content]: true } : null,
      blok.gap,
    ]"
  >
    <StoryblokComponent
      v-for="(currentBlok, index) in blok.body"
      :key="index"
      :blok="currentBlok"
    />
  </div>
</template>

<script setup lang="ts">
const { blok } = defineProps<{ blok: GridSection }>();

const columnsClass = ref("");

watchEffect(() => {
  columnsClass.value = blok.cols ? "lg:grid-cols-" + blok.cols : "";
});
</script>

<style lang="scss" scoped></style>
