<template>
  <div
    v-editable="blok"
    :class="[
      'grid max-lg:auto-cols-auto',
      columnsClass,
      blok.justify_items,
      blok.align_items,
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

const columnsClass = ref("lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4");
const justifyClass = ref(
  "lg:justify-item-center lg:justify-items-start lg:justify-items-end",
);
const alignClass = ref(
  "lg:align-item-center lg:align-items-start lg:align-items-end",
);

watchEffect(() => {
  columnsClass.value = blok.cols
    ? "lg:grid-cols-" + blok.cols
    : "grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]";
});
</script>

<style lang="scss" scoped></style>
