<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <!-- <template v-if="story">
    <pre><code>{{ story.content }}</code></pre>
  </template> -->
</template>

<script setup>
const { slug } = useRoute().params;
const { story } = await useAsyncStoryblok(slug === "" ? "index" : slug, {
  deep: true,
  api: {
    version: "draft",
    resolve_links: "url",
  },
  bridge: {
    preventClicks: true,
  },
});

useSeoMeta({
  title: () =>
    story?.value?.content.seo[0].title
      ? story?.value?.content.seo[0].title
      : null,
  description: () =>
    story?.value?.content.seo[0].description
      ? story?.value?.content.seo[0].description
      : null,
  ogImage: () =>
    story?.value?.content.seo[0].og_image.filename
      ? story?.value?.content.seo[0].og_image.filename
      : null,
  twitterTitle: () =>
    story?.value?.content.seo[0].x_title
      ? story?.value?.content.seo[0].x_title
      : null,
  twitterDescription: () =>
    story?.value?.content.seo[0].x_description
      ? story?.value?.content.seo[0].x_description
      : null,
  twitterImage: () =>
    story?.value?.content.seo[0].x_image.filename
      ? story?.value?.content.seo[0].x_image.filename
      : null,
});
</script>

<style lang="scss" scoped></style>
