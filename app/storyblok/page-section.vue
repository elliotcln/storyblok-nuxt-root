<template>
  <section
    v-editable="blok"
    :id="`section-` + blok._uid"
    :class="['section py-12 lg:py-16 xl:py-20', sectionBackgroundClass]"
  >
    <div
      :class="[
        { container: !blok.is_fullwidth },
        'section__content grid gap-6 lg:gap-8',
        { 'lg:grid-cols-2': blok.orientation === 'horizontal' },
      ]"
    >
      <div
        v-if="blok.title"
        :class="[
          'section__head text-center',
          { 'lg:max-w-lg lg:text-left': blok.orientation === 'horizontal' },
          {
            'lg:col-start-2': blok.is_reversed,
          },
        ]"
      >
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
          {{ blok.title }}
        </h2>
        <p v-if="blok.description" class="mt-4 text-lg opacity-60 sm:text-xl/8">
          {{ blok.description }}
        </p>
        <div
          v-if="blok.actions.length > 0 && blok.orientation === 'horizontal'"
        >
          <div class="section__actions mt-6 flex flex-wrap gap-4 max-lg:hidden">
            <StoryblokComponent
              v-for="(currentBlok, index) in blok.actions"
              :key="index"
              :blok="currentBlok"
            />
          </div>
        </div>
      </div>
      <div>
        <StoryblokComponent
          v-for="(currentBlok, index) in blok.body"
          :key="index"
          :blok="currentBlok"
        />
      </div>
      <div v-if="blok.actions.length > 0">
        <div
          :class="[
            'section__actions flex flex-wrap justify-center gap-4',
            { 'lg:hidden': blok.orientation === 'horizontal' },
          ]"
        >
          <StoryblokComponent
            v-for="(currentBlok, index) in blok.actions"
            :key="index"
            :blok="currentBlok"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { blok } = defineProps<{ blok: PageSection }>();

const sectionBackgroundClass = ref(
  "bg-primary/50 bg-secondary/50 bg-accent/50 bg-muted/50 bg-destructive/50",
);

watchEffect(() => {
  sectionBackgroundClass.value = blok.background
    ? "bg-" + blok.background + "/50"
    : "";
});
</script>

<style lang="scss" scoped></style>
