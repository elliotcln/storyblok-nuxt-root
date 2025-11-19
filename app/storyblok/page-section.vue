<template>
  <section
    v-editable="blok"
    :id="`section-` + blok._uid"
    :class="[
      'section py-12 lg:py-16 xl:py-20',
      sectionBackgroundClass,
      blok.has_border ? ['border-secondary', blok.has_border] : null,
    ]"
  >
    <div
      :class="[
        { container: !blok.is_fullwidth },
        'section__content grid gap-6 lg:gap-8',
        { 'lg:grid-cols-2': blok.orientation === 'horizontal' },
        blok.vertical_alignment
          ? { ['items-' + blok.vertical_alignment]: true }
          : null,
      ]"
    >
      <div
        v-if="blok.title"
        :class="[
          'section__head text-center text-balance',
          { 'text-left': blok.orientation === 'horizontal' },
          {
            'lg:col-start-2 lg:row-start-1': blok.is_reversed,
          },
        ]"
      >
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
          {{ blok.title }}
        </h2>
        <p
          v-if="blok.description"
          :class="[
            'mt-4 text-lg text-balance opacity-60 sm:text-xl/8 lg:max-w-3xl',
            { 'mx-auto': blok.orientation === 'vertical' },
          ]"
        >
          {{ blok.description }}
        </p>
        <!-- <p class="mt-8" v-if="blok.content">
          {{ blok.content }}
        </p> -->
        <div class="mt-8" v-if="blok.content">
          <StoryblokRichText :doc="blok.content" />
        </div>
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
      <div
        :class="[
          'flex flex-col gap-4',

          {
            'lg:col-start-1 lg:row-start-1': blok.is_reversed,
          },
        ]"
      >
        <NuxtImg
          v-if="blok.media?.filename"
          :src="blok.media.filename"
          class="rounded-lg"
        />
        <StoryblokComponent
          v-for="(currentBlok, index) in blok.body"
          :key="index"
          :blok="currentBlok"
          class="mt-4"
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

const sectionBackgroundClass = ref("");

watchEffect(() => {
  sectionBackgroundClass.value = blok.background
    ? "text-" +
      blok.background.replace("/50", "") +
      "-foreground bg-" +
      blok.background
    : "";
});
</script>

<style lang="scss" scoped></style>
