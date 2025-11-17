<template>
  <section class="page-hero py-32 sm:py-48 lg:py-56" v-editable="blok">
    <div class="container">
      <div class="mx-auto max-w-2xl">
        <div class="text-center">
          <h1
            class="text-5xl font-semibold tracking-tight text-balance sm:text-7xl"
          >
            {{ blok.headline }}
          </h1>
          <p class="text-primary/50 mt-8 text-lg text-pretty sm:text-xl/8">
            {{ blok.description }}
          </p>
        </div>

        <div class="mt-10 flex flex-wrap justify-center gap-x-4">
          <StoryblokComponent
            v-for="currentBlok in blok.buttons"
            :key="currentBlok._uid"
            :blok="currentBlok"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped></style>
