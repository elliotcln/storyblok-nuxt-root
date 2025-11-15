<template>
  <section
    class="page-hero py-12 pt-20 lg:pb-16 lg:pt-26 xl:pb-24 xl:pt-40"
    v-editable="blok"
  >
    <div class="container">
      <div class="grid gap-4 xl:gap-8">
        <div>
          <h1
            class="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-normal"
          >
            {{ blok.headline }}
          </h1>
          <p class="text-accent-foreground/50">{{ blok.description }}</p>
        </div>

        <div class="flex gap-2">
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
