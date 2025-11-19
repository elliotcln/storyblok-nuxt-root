<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <!-- <template v-if="story">
    <pre><code>{{ story }}</code></pre>
  </template> -->
</template>

<script setup lang="ts">
const { path } = useRoute();
const { story } = await useAsyncStoryblok(
  path === "" ? "/pages" : "/pages/" + path,
  {
    deep: true,
    api: {
      version: "draft",
      resolve_links: "url",
    },
    bridge: {
      preventClicks: true,
    },
  },
);

useSeoMeta({
  title: () =>
    story?.value?.content?.seo[0]?.title
      ? story?.value?.content?.seo[0]?.title
      : "",
  description: () =>
    story?.value?.content?.seo[0]?.description
      ? story?.value?.content?.seo[0]?.description
      : "",
  ogImage: () =>
    story?.value?.content?.seo[0]?.og_image.filename
      ? story?.value?.content?.seo[0]?.og_image.filename
      : "",
  twitterTitle: () =>
    story?.value?.content?.seo[0]?.x_title
      ? story?.value?.content?.seo[0]?.x_title
      : "",
  twitterDescription: () =>
    story?.value?.content?.seo[0]?.x_description
      ? story?.value?.content?.seo[0]?.x_description
      : "",
  twitterImage: () =>
    story?.value?.content?.seo[0]?.x_image.filename
      ? story?.value?.content?.seo[0]?.x_image.filename
      : "",
});
</script>

<style lang="scss" scoped></style>
