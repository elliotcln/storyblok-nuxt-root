<template>
  <header
    v-editable="blok"
    class="border-accent border-b py-12 lg:py-16 xl:py-20"
  >
    <div class="container">
      <NavigationBreadcrumb v-if="blok.show_breadcrumb" />
      <div class="max-w-4xl text-balance">
        <h1
          class="scroll-m-20 text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          {{ blok.title }}
        </h1>
        <p
          v-if="blok.description"
          class="mt-2 text-lg text-pretty opacity-60 sm:text-xl/8"
        >
          {{ blok.description }}
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ blok: PageHeader }>();
</script>

<style scoped></style>
