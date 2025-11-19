<template>
  <div
    v-editable="blok"
    :class="[
      blok.body.length > 1 ? { ['grid']: true } : 'grid md:flex',
      columnsClass,
      blok.gap,
      blok.cols_md ? { ['md:grid-cols-' + blok.cols_md]: true } : null,
      blok.cols_lg ? { ['lg:grid-cols-' + blok.cols_lg]: true } : null,
      blok.align_content_md
        ? { ['md:align-' + blok.align_content_md]: true }
        : null,
      blok.align_content_lg
        ? { ['lg:align-' + blok.align_content_lg]: true }
        : null,
      blok.justify_content_md
        ? { ['md:justify-' + blok.justify_content_md]: true }
        : null,
      blok.justify_content_lg
        ? { ['lg:justify-' + blok.justify_content_lg]: true }
        : null,
      blok.align_items_md
        ? { ['md:align-items-' + blok.align_items_md]: true }
        : null,
      blok.align_items_lg
        ? { ['lg:align-items' + blok.align_items_lg]: true }
        : null,
      blok.justify_items_md
        ? { ['md:justify-items-' + blok.justify_items_md]: true }
        : null,
      blok.justify_items_lg
        ? { ['lg:justify-items' + blok.justify_items_lg]: true }
        : null,
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
  columnsClass.value = !blok.cols_md
    ? "grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]"
    : "";
});
</script>

<style lang="scss" scoped></style>
